class bol {
  constructor (x,y,k){
  this.diameter= 150;
  this.positieX= x;
  this.positieY= y;
  this.snelheid= 5;
  this.kleur= k;
  }
   teken(){
   fill(this.kleur);
   ellipse(this.positieX, this.positieY, this.diameter);
   }

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

  bol1 = new bol (110,110,"green");
  bol2 = new bol (150,150,"red");
  bol3 = new bol (190,190,"purple");

}

function draw() {
  noStroke();
  background('silver');

  bol1.teken();
  bol2.teken();
  bol3.teken();
  bol1.beweeg();
  bol2.beweeg();
  bol3.beweeg();
}