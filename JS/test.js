class bol {
  constructor (x,y){
  this.diameter= 50;
  this.positieX= x;
  this.positieY= y;
  this.snelheid= 5;
  this.kleur = [random(0, 255), random(0, 255), random(0, 255)];
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
var cirkel = [ ];


function setup() {
  canvas = createCanvas(450,450);

  canvas.parent('processing');
  //noLoop();
  colorMode(RGB,255,255,255,1);

  for (var k = 0; k < 20; k++) {
    cirkel.push(new bol(random(20,400),random(20,400),'white'));
  }  

//  bol1 = new bol (110,110,"green");
//  bol2 = new bol (150,150,"red");
//  bol3 = new bol (190,190,"purple");

}

function draw() {
  noStroke();
  background('silver');

for(var b = 0;b < 20; b++){
cirkel[b].teken();
cirkel[b].beweeg();

}

 // bol1.teken();
 // bol2.teken();
 // bol3.teken();
 // bol1.beweeg();
 // bol2.beweeg();
 // bol3.beweeg();
}