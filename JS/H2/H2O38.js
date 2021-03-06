class Knikker {
  constructor(x,y,kl) {
    this.diameter = 3;
    this.straal = this.diameter / 2;
    this.x = x;
    this.y = y;
    this.snelheidX = random(1,10);
    this.snelheidY = random(1,10);
    this.kleur = [random(0, 255), random(0, 255), random(0, 255)];
  }

  beweeg() {
    this.x += this.snelheidX;
    this.y += this.snelheidY;
    
    if (this.x < this.straal || this.x > canvas.width - this.straal) {
      this.snelheidX *= -1;
    }
    if (this.y < this.straal || this.y > canvas.height - this.straal) {
      this.snelheidY *= -1;
    }
  }
  
  teken() {
    fill(this.kleur);
    ellipse(this.x,this.y,this.diameter);
  }
}

var knikkerVerzameling = [];

function setup() {
  canvas = createCanvas(1000,300);
  canvas.parent('processing');
  frameRate(360);
  colorMode(RGB,255,255,255,1);
  background(50);
  noStroke();
  for (var k = 0; k < 9999; k++) {
    knikkerVerzameling.push(new Knikker(random(20,980),random(20,280),'white'));
  }  
}

function draw() {
  background(120, 120, 120,0.2);
  for (var i = 0; i < knikkerVerzameling.length; i++) {
    knikkerVerzameling[i].beweeg();
    knikkerVerzameling[i].teken();
  } 
  if (mouseIsPressed) {
    for (let i=0; i < 10; i++) {
      knikkerVerzameling.push(new Knikker(mouseX,mouseY,0));
    }
  }
}