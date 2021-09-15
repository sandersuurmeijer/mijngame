var bol = {
  diameter: 150,
  positieX: 200,
  positieY: 200,
  snelheid: 5,
  
   teken(){
   fill('red');
   ellipse(this.positieX, this.positieY, this.diameter);
   },

   beweeg(){
     if(keyIsDown(RIGHT_ARROW)){
     this.positieX+=this.snelheid;
     }
     if(keyIsDown(LEFT_ARROW)){
      this.positieX-=this.snelheid;
      }
      if(keyIsDown(UP_ARROW)){
        this.positieY-=this.snelheid;
        }
        if(keyIsDown(DOWN_ARROW)){
          this.positieY+=this.snelheid;
          }
   }

  }

function setup() {
  canvas = createCanvas(450,450);

  canvas.parent('processing');
  //noLoop();

}

function draw() {
  noStroke();
  background('silver');
  bol.teken();
  bol.beweeg();
}