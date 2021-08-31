function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();

}

function draw() {
  noStroke();

for(var n=0; n<5; n++) {
  fill('red')
  if ( n=3){
    fill('blue')
  }
  rect(0,250,50,50)
  translate(100,0)
  
}






// fill('steelblue');
//  ellipse(0,0,800);
//  fill('deepskyblue');
//  ellipse(450,450,400);
}