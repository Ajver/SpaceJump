
function Jumper(x, y) {
  this.w = 40;
  this.h = 30;
  const options = {
    friction: 0,
  };
  this.body = Bodies.rectangle(x, y, this.w, this.h, options);
  World.add(world, this.body);

  Matter.Body.setAngle(this.body, PI/4);

  this.draw = () => {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rect(0, 0, this.w, this.h);
    circle(0, 0, 3);
    pop();
  }

}