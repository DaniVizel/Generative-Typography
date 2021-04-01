var x=0;

function preload() {
  font = loadFont('Lato-BoldItalic.ttf')
}
    
function setup() {
  createCanvas(1000, 1000)
  background(255);
  //colorMode(HSB, 100);
  
}
    
function draw() {
background(255, 255, 255, 50);
let myOptions = ['red', 'magenta', 'aqua', 'yellow', 'orange', 'lime', 'purple'];
let rdmCol = Math.floor(random(myOptions.length));
noStroke();
fill(myOptions[rdmCol])

translate(500, 500);


textFont(font);
textSize(800);
textAlign(CENTER, CENTER);
rotate(x);
text('!', 0, -300);

x = x + 2;
}




function keyPressed() {
    if (key === 's'){
      saveCanvas("sketch-15", "jpg");  
    }
}