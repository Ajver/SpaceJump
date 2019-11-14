
SJ.PullingSystem =
class {
  constructor() {
    this.pullingArray = PAD_PULLING_POINTS;
    this.friction = SJ.V.jumperFriction;
    this.p1 = null;
    this.p2 = null;
    this.index = 1;
    this.setIndex(1);
  }

  setIndex(newIndex) {
    this.index = newIndex;
    this.p1 = this.pullingArray[newIndex-1];
    this.p2 = this.pullingArray[newIndex];    
  }

  update () {
    const jumperPos = SJ.jumper.body.position;
    if(jumperPos.x >= this.p2.x) {
      this.index++;
      if(this.index < this.pullingArray.length) {
        this.p1 = this.p2;
        this.p2 = this.pullingArray[this.index];
      }else {
        this.index = 1;
        return false;
      }
    }
    
    if(jumperPos.x >= JUMP_POINT && jumperPos.x <= JUMP_END_POINT) {
      SJ.pad._canJump = true;
      SJ.MessagesManager.canJump();
    }
    
    if(!SJ.jumper.isSlowingDown) {
      if(jumperPos.x >= FALL_LINE) {
        SJ.jumper.isSlowingDown = true;
        SJ.camera.stopFollowingJumper();

        window.setTimeout(() => {
          SJ.restartGame();
        }, 1000);
      } 
    }

    return true;
  }

  setNewVelocityAndAngle () {
    const diff_x = this.p2.x - this.p1.x;
    const diff_y = this.p2.y - this.p1.y;
    const alpha = atan2(diff_y, diff_x);
    const acc = sin(alpha) * SJ.world.gravity.y;

    const currVel = SJ.jumper.body.velocity
    const currVelMag = Matter.Vector.magnitude(currVel);
    
    const velAlpha = atan2(currVel.y, currVel.x);
    const diffAlpha = velAlpha - alpha;
    
    Matter.Body.setAngle(SJ.jumper.body, alpha+SJ.jumper.offsetAngle);

    let newVel = Matter.Vector.create(0, 0);
    newVel.x = cos(diffAlpha) * currVelMag;
    newVel = Matter.Vector.rotate(newVel, alpha);
    
    let accVec = Matter.Vector.create(acc, 0);
    accVec = Matter.Vector.rotate(accVec, alpha);   

    newVel = Matter.Vector.add(newVel, accVec);
    newVel = Matter.Vector.mult(newVel, 1.0 - this.friction - SJ.V.padFriction);

    SJ.jumper.body.velocity = newVel;
  }

}

