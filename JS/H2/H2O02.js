var kater,toren,piano;

function preload() {
  kater = loadImage("images/brieck.jpg");
  Toren = loadImage("images/toren.jpg");
  Piano = loadImage("images/piano.jpg")
}

function setup() {
  canvas = createCanvas(850,300);
  canvas.parent('processing');
  noLoop();
  background('grey');
  fill('white');
  textFont("Verdana");
  textSize(14);
  noStroke();
  rect(25,25,250,250);
  rect(300,25,250,250);
  rect(575,25,250,250)
}

function draw() {
  text("afmeting: " + kater.width + " x " + kater.height,30,20);
  text("afmeting: " + Toren.width + " x " + Toren.height,310,20);
  text("afmeting: " + Piano.width + " x " + Piano.height,585,20);
  image(kater,25,25,250,250);
  image(Toren,300,25,250,250);
  image(Piano,575,25,250,250);
}