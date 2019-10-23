
SJ.UI =
class {
  constructor() {
    this._scoreLabel;
    this._messageLabel;
    this._airAngle;  
    this.updateScoreLabel(0);
    this.updateAirAngle(0);
  }

  draw() {
    push();
    stroke(255);
    fill(0);
    textSize(32);
    
    text(this._scoreLabel, SJ.SCREEN_WIDTH-240, 40);

    textAlign(CENTER);
    text(this._messageLabel, SJ.SCREEN_WIDTH*0.5, SJ.SCREEN_HEIGHT-40);

    translate(80, 80);
    strokeWeight(4);
    fill(0);
    const vec = SJ.airSystem.getVectorFromAngle(this._airAngle, 60);
    stroke(0);
    line(-vec.x, -vec.y, vec.x, vec.y);
    circle(vec.x, vec.y, 10);

    pop()
  }

  updateScoreLabel(score) {
    this._scoreLabel = "Score: " + score;
  }

  updateMessageLabel(message) {
    this._messageLabel = message;
  }

  updateAirAngle(angle) {
    this._airAngle = angle;
  }

}