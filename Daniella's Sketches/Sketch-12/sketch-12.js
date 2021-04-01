let s1 = 1;
let s2 = -79;
let x = 0;
let y = 50;

function preload() {
  font = loadFont('Lato-BoldItalic.ttf')
}
    
function setup() {
  createCanvas(1000, 1000)
  background(0)
  angleMode(DEGREES);
  frameRate(24);
}
    
function draw() {
  background(0, 0, 0, 10);
  translate(500, 950);

  push();
  scale(s1);
  textSize(60);
  textAlign(CENTER)
  noFill(0);
  strokeWeight(0.25);
  stroke(random(150, 255) + 2, random(20, 155) + 2, random(150, 200) + 2);
  text('!', -1 , 0);
  pop();
  

  s1 = s1 + 1;
  s2 = s2 + 1;
  y = y - 0.5;

  if (s1 > 150) {
    s1 = 1;
  }
  if (s2 > 150) {
    s2 = 1;
  }
  if (y < -2) {
    y = 50;
  }
  if (s1 > 80) {
    push()
    scale(s2);
    textSize(60);
    textAlign(CENTER)
    noFill(0);
    strokeWeight(0.25);
    stroke(random(100, 150) + 2, random(20, 155) + 2, random(150, 255) + 2);
    text('!', -1 , 0);
    pop()
  }

}









function keyPressed() {
    if (key === 's'){
      saveCanvas("sketch-12", "jpg");  
    }
}