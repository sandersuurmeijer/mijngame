var huisNummers = new Array(23,25,27,29,31,33);
var huisEigenaren = new Array("Smiers","Dekker","Den Hartog","Tolboom","Kremer","Velthuizen");
var kleur = 'lightgray';

function setup() {
  canvas = createCanvas(1000,300);
  canvas.parent('processing');
  background('cornflowerblue');
  textFont("Georgia");
  noStroke();
  noLoop();
}

function draw() {
  tekenAchtergrond();

  for(var n = 0; n < huisNummers.length; n++){
    tekenHuis(kleur,huisNummers[n],huisEigenaren[n]);
    translate(150,0);

if(kleur=='lightgray'){
  kleur='darkgray'
}
else{
  kleur='lightgray'
}


  }
}

function tekenHuis(kleur,nr,naam) {
  push();
  fill(kleur);
  rect(0,110,150,150);
  fill('gray');
  triangle(0,110,150,110,75,20);
  rect(20,170,50,90);
  fill('indianred');
  textSize(30);
  text(nr,75,190);
  fill('black');
  textSize(15);
  text(naam,20,165);

  pop();
}

function tekenAchtergrond() {
  fill('wheat');
  rect(0,220,width,height - 220);
  translate(50,0);
}