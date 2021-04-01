// inspired by aferriss
// https://editor.p5js.org/aferriss/sketches/SPu1I9yOJ

let img;
let amt = 30;
let numX;
let numY;

function preload() {
  img = loadImage("exclamation-mark_2.jpeg");
}

function setup() {
  createCanvas(1000, 1000);
    colorMode(HSB,100);
    frameRate(10);

  numX = width / amt;
  numY = height / amt;

  img.resize(width, height);

  noStroke();
}


function draw() {
  background(0);

  for (let y = 0; y <= height; y += numY) {
    for (let x = 0; x <= width; x += numX) {

      // Get the color at each position
      const pixel = img.get(x, y);

      // hot pink version
      fill('lime');

      // Get the brightness
      const bri = brightness(pixel);
      
      // Map our brightness value to circle size + mouseX
      //const size = map(bri + mouseX, 0, width + 255, 0, numX * 2);
      const size = map(bri, 0, width + 1000, 0, numX * 2);
      
      // Draw each circle
      rect(x + numX / 2 - 10, y + numY / 2 - 5, size * 6, 5);
    }
  }

}



function keyPressed() {
    if (key === 's'){
      saveCanvas("sketch-21", "jpg");  
    }
}