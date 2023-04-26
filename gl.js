class Snake {
    constructor() {
      this.x = 5
      this.y = 5
      this.width = 10
      // this.length = 3
      // this.tail = {x: }
      // this.frames = 0
    }
    
    draw(){
      circle(this.x*this.width, this.y*this.width, this.width) 
    }
  }
  
  let player = new Snake();
  
  function setup() {
    frameRate(5);
    createCanvas(400, 400);
     background(220);
  }
  
  function draw() {
    player.draw();
    player.x ++;
  }