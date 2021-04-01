// inspired by The Coding Train
// 11.3 Pixel Array Tutorial
// https://youtu.be/nMUMZ5YRxHI
function preload() {
  font = loadFont('Lato-BoldItalic.ttf')
}
    
function setup() {
  createCanvas(1000, 1000)
  background(0);
  pixelDensity(1);
  frameRate(10);
  angleMode(DEGREES);
  
}
    
function draw() {

// rainbow pixilated effect
  loadPixels();
  for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
          var index = (x + y * width) * 4;
          pixels[index+0] = x;
          pixels[index+1] = random(255);
          pixels[index+2] = y;
          pixels[index+3] = 255;
      }
  }
  updatePixels();

// exclaimation mark no. 1
translate(500, 500);
blendMode(MULTIPLY);
fill(50, 0, 100);
textFont(font);
textSize(1200);
textAlign(CENTER, CENTER);
rotate(mouseY);
text('!', 0, -300);

}

function keyPressed() {
    if (key === 's'){
      saveCanvas("sketch-13", "jpg");  
    }
}