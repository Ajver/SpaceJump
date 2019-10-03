
function UI() {
  
  this.scoreLabel;
  this.messageLabel;
  this.airAngle;

  this.draw = () => {
    push();
    stroke(255);
    fill(0);
    textSize(32);
    
    text(this.scoreLabel, width-240, 40);

    textAlign(CENTER);
    text(this.messageLabel, width*0.5, height-40);

    translate(80, 80);
    strokeWeight(4);
    fill(0);
    const vec = airSystem.getVectorFromAngle(this.airAngle, 60);
    stroke(0);
    line(-vec.x, -vec.y, vec.x, vec.y);
    circle(vec.x, vec.y, 10);

    pop()
  }

  this.updateScoreLabel = (score) => {
    this.scoreLabel = "Score: " + score;
  }

  this.updateMessageLabel = (message) => {
    this.messageLabel = message;
  }

  this.updateAirAngle = (angle) => {
    this.airAngle = angle;
  }
  
  this.updateScoreLabel(0);
  this.updateAirAngle(0);

}