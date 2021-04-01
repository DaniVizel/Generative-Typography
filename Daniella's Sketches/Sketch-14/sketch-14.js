var x=0;

function preload() {
  font = loadFont('Lato-BoldItalic.ttf')
}
    
function setup() {
  createCanvas(1000, 1000)
  background(255);
  
}
    
function draw() {

let m = color('magenta');
let y = color('yellow');
let c = color('aqua');

let myOptions = ['c', 'm', 'y'];
let rdmCol = random(myOptions);

translate(500, 500);

fill(rdmCol);

textFont(font);
textSize(800);
textAlign(CENTER, CENTER);
rotate(x);
text('!', 0, -300);

x = x + 36;
}




function keyPressed() {
    if (key === 's'){
      saveCanvas("sketch-14", "jpg");  
    }
}