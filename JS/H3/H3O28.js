class vliegtuig {
  constructor(png) {
    this.afbeelding = png;
    this.breedte = 150 * 2 / 3;
    this.marge = 100;
    this.hoogte = (this.breedte / this.afbeelding.width * this.afbeelding.height);
    this.snelheid = 5
    this.x = 10;
    this.y = 150;
    this.vx = 1;
    this.vy = -2;
    this.a = 0.1;
  }

  vlieg() {
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.snelheid;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.snelheid - 1;
    }
  }



  beweeg() {
    this.x += this.vx;
    this.vy += this.a;
    this.y += 1;
    this.y = constrain(this.y,0,canvas.height);
  }

  teken() {
      push();
      noStroke();
      image(this.afbeelding,this.x,this.y,this.breedte,this.hoogte);
      fill(255,0,0,0.25);
      pop();
  }
}


class Obstakel {
  constructor(x,y,b,h,png) {
    this.x = x;
    this.y = y;
    this.b = b;
    this.h = h;
    this.bomraket = png;
  }

  beweeg(v) {
      this.x -= v;
  }


  raakt(vliegtuig) { 
      if(vliegtuig.x + vliegtuig.breedte - vliegtuig.marge > this.x && vliegtuig.x + vliegtuig.marge < this.x + this.b &&
        vliegtuig.y  - vliegtuig.marge > this.y && vliegtuig.y + vliegtuig.marge + 50 < this.y + this.h)
        {      
      return true;
      
    }
    else {
      return false;
    }
  }

  teken() {
    push();
    noStroke();
    image(this.bomraket,this.x,this.y,this.b,this.h);
    pop();
  }
}

class spelletjuh {
  constructor() {
    this.speler = new vliegtuig (F16);
    this.actief = false;
    this.afgelopen = false;
    this.afstandObstakels = 200;
    this.aantalObstakels = floor(canvas.width / this.afstandObstakels);
    this.grootteObstakels = 6;
    this.factorObstakels = 0.5;
    this.snelheidObstakels = 0;
    this.snelheidsVeranderingObstakels = 0.1;
    this.obstakels = [];
        for (var tellen = 0;tellen<this.aantalObstakels;tellen++) {
            this.maakObstakel(this.afstandObstakels*(this.obstakels.length + 1))
    }
    this.eindTekst = "Je bent af LOSER!";
    this.startTijd = null;
  }

  maakObstakel(x) {
        var y = 0;
        var hoogte = 300;
        var positie =  random( -150, 200);
        if (round(random(0,1)) == 0) {
            y = canvas.height - positie;
        }
        this.obstakels.push(new Obstakel(x,positie,250,hoogte,bomraket));
  }


  beginScherm() {
    push();
    textAlign(CENTER,CENTER);
    noFill();
    strokeWeight(5);
    stroke(0,0,200,.8);
    textSize(44);
    strokeWeight(2);
    stroke(0);
    fill(200,200,200,.5);
    text("Wrong Way!\n\n Gebruik de pijltjestoetsen om te vliegen en ontwijk de bommen. Druk ENTER om te starten.",0,0,canvas.width,320);
    pop();
  }

  eindScherm() {
    push();
    textAlign(CENTER,CENTER);
    fill(0);
    stroke('yellow');
    strokeWeight(3);
    text(this.eindTekst+'\nDruk ENTER voor nieuw spel.\n',0,0,canvas.width,350);
    pop();
  }

  update() {
    if (spel.actief) {
      this.speler.vlieg();
      this.speler.beweeg();
      if (this.snelheidObstakels == 0 && this.speler.x >= canvas.width * 0.4) {
          this.speler.vx = 0;
          this.snelheidObstakels = 1;
      }
      fill('red');
      if (this.obstakels[this.obstakels.length - 1].x <= canvas.width - this.afstandObstakels) {
          this.maakObstakel(canvas.width);
          this.grootteObstakels *= this.factorObstakels;
          if (this.snelheidObstakels % 10) {
              this.snelheidObstakels += this.snelheidsVeranderingObstakels;
          }
      }
      for (var o = 0;o<this.obstakels.length;o++) {
        if(this.obstakels[o].raakt(this.speler) || this.speler.y >= canvas.height) {
          this.speler.vx = 0;
          this.afgelopen = true;
        }

        this.obstakels[o].beweeg(this.snelheidObstakels);
      }
    }
  }

  tekenScorebord() {
      push();
      if (!this.afgelopen && this.speler.vx == 0) {
        var score = floor((frameCount - this.startTijd) / 150 * this.snelheidObstakels) - 3;
        var level = 1 + floor(score / (20 + this.snelheidObstakels));
        fill(250,250,250,.5);
        noStroke();
        rect(30,30,150,40);
        fill(20);
        textSize(28);
        text("level: "+level,12,15,200,70);  
      }
      pop();
  }

  teken() {
    background(255); 
    background(achtergrond);
    if (!this.actief) {
      this.beginScherm();
    }
    else {
      this.speler.teken();
      for (var o = 0;o < this.obstakels.length;o++) {
        this.obstakels[o].teken();
      }
      this.tekenScorebord();
      if (this.afgelopen) {
        this.eindScherm();
      }
    }
  }
}

laadJavascriptFile('JS/P5/addons/p5.sound.js');

var canvasH = 400;
var canvasB;
function preload() {
  F16 = loadImage("images/F16_kopiëren.png");
  achtergrond = loadImage("images/achtergrond.jpg");
  bomraket = loadImage("images/bomraket_kopiëren.png");
  achtergrondmuziek = loadSound("sounds/background/achtergrondmuziek.mp3");
  ping = loadSound("sounds/effects/typemachine_ping.ogg");

}

function setup() {
  canvasB = canvasH * achtergrond.width / achtergrond.height;
  canvas = createCanvas(canvasB,canvasH);
  canvas.parent('processing');
  colorMode(RGB,255,255,255,1);
  textFont("Monospace");
  textSize(44);
  textAlign(CENTER,CENTER);
  spel = new spelletjuh ;
  achtergrondmuziek.loop();
  ping.play();

}

function draw() {
  background(255);
  spel.update();
  spel.teken();
}

function keyTyped() {
  if (!spel.actief && keyCode == ENTER) {
    spel.actief = true;
    spel.startTijd = frameCount;
  }
  if (spel.afgelopen && keyCode == ENTER) {
    setup();
  }
}
 