//let x = random(255);
var r = 1;

function preload() {
  font = loadFont('Lato-BoldItalic.ttf')
}
    
function setup() {
  createCanvas(1000, 1000)
  background(0)
  angleMode(DEGREES);
}
    
function draw() {
  
  background(0, 0, 0, 20);

  push();
  translate(500, 500);
  //rotate(r + 1);
  rotate(mouseY);
  textSize(800);
  noFill(0);
  strokeWeight(2);
  stroke(random(0, 100) + 2, random(0, 255) + 2, random(120, 200) + 2);
  text('!', - 100, 200);

  r = r + 1;
  pop();
}


function keyPressed() {
    if (key === 's'){
      saveCanvas("sketch-11", "jpg");  
    }
}