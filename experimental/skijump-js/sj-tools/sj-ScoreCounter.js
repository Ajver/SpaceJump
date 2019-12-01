
SJ.Rater =
class {
  constructor(rateFunc, getScore) {
    this.rate = rateFunc;
    this.score = 0;
    this.getScore = getScore || (() => { return this.score; })
  }
}

SJ.ScoreCounter = 
class {
  constructor() {
    this.jumpRater = new SJ.Rater(() => {
      const jumperX = SJ.jumper.body.position.x;
      const jumpAreaWidth = JUMP_END_POINT - JUMP_POINT;

      const jumperRelativeX = jumperX - JUMP_POINT;

      const proportion = jumperRelativeX / jumpAreaWidth;

      this.jumpRater.score = round(40.0 * proportion);
      this.jumpRater.score /= 2; 
    });

    this.stableFlyRater = new SJ.Rater(() => {
      const currentAnlge = SJ.jumper.body.angle;
      const relativeAngle = abs(currentAnlge - this.stableFlyRater.jumperPreviousAngle);
      this.stableFlyRater.reachedJumperAngle += relativeAngle;  
      this.stableFlyRater.jumperPreviousAngle = currentAnlge;
      // print(degrees(this.stableFlyRater.reachedJumperAngle));
      print(degrees(relativeAngle));

    }, () => {
      const reachedAngle = degrees(this.stableFlyRater.reachedJumperAngle);
      const maxBestAngle = 50;
      if(reachedAngle < maxBestAngle) {
        return 20;
      }else {
        const maxAcceptedRotate = 300;
        const score = round((maxAcceptedRotate - reachedAngle) / (maxAcceptedRotate-maxBestAngle) * 40.0)  / 2.0;
        return max(min(score, 20), 0);
      }
    });
    this.stableFlyRater.reachedJumperAngle = 0;
    this.stableFlyRater.jumperPreviousAngle = 0;

    this._raters = [
      this.jumpRater,
      this.stableFlyRater,

    ];

    // Distance to the point K in metters
    this._PIXELS_TO_METERS = SJ.V.padSize / (POINT_K-JUMP_END_POINT);
    this._POINT_PER_METER = 2.8;
    this.score = 0;
  }

  calculateDistance() {
    const landX = SJ.jumper.body.position.x;
    const distTo_K = landX - POINT_K;
    
    const mettersDistTo_K = distTo_K * this._PIXELS_TO_METERS;

    let points = 60 + (mettersDistTo_K * this._POINT_PER_METER);
    points = round(points, 2);

    return points;
  }

  calculateScore() {
    let score = 0;
    this._raters.forEach(rater => {
      score += rater.getScore();
    });
    score += this.calculateDistance();
    this.score = score;
  }

  rate() {
    
  }

}

