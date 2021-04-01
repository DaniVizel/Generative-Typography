var x=0;
var i=1;

function preload() {
  font = loadFont('Lato-BoldItalic.ttf')
}
    
function setup() {
  createCanvas(1000, 1000)
  background(0);
  //angleMode(DEGREES);
  colorMode(HSB, 100);
  
}
    
function draw() {

translate(500, 500);

noFill();
strokeWeight(2);
stroke(i,100,100);
textFont(font);
textSize(800);
textAlign(CENTER, CENTER);
rotate(x);
text('!', 0, -300);

x = x + 2;
i++;

if (i > 100) {
  i = 1;
}
}




function keyPressed() {
    if (key === 's'){
      saveCanvas("sketch-16", "jpg");  
    }
}