function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  noStroke();
    background('lavender');
  //noLoop();
}

function draw() {
  fill("wheat");
  fill("black")
  text("mouseX:" + round(mouseX) + " mouseY:"+round(mouseY),10,20);
  fill('indianred');
  ellipse(mouseX,mouseY);
}
