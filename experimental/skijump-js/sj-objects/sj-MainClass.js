
SJ.MainClass = 
class {
  constructor() {
    this._drawableObjects = [];
    
    SJ.PadCreator.loadImages();
    
    rectMode(CENTER);

    this._engine = Matter.Engine.create();
    SJ.world = this._engine.world;
    SJ.world.gravity.y = SJ.V.gravity;

    SJ.airSystem = new SJ.AirSystem();

    this._restartGame();

    Matter.Engine.run(this._engine);
  }

  draw() {
    background(51);

    push();
      SJ.jumper.update();
      SJ.pad.update();
    
      push();
        SJ.camera.update();
        SJ.camera.transform();
        this._drawableObjects.forEach((element) => {
          element.draw();
        });
      pop();
      
      SJ.airSystem.update();

      SJ.ui.draw();
    pop();
  }

  _restartGame() {
    this._drawableObjects = [];

    SJ.jumper = new SJ.Jumper(310, 1060);
    SJ.pad = new SJ.LaunchingPad();
    SJ.scoreCounter = new SJ.ScoreCounter();
    
    SJ.camera = new SJ.Camera(1);

    SJ.ui = new SJ.UI();
  
    this._drawableObjects.push(SJ.pad);
    this._drawableObjects.push(SJ.jumper);

    SJ.pad.onReady();
  }

};
