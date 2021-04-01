// inspired by aferriss
// https://editor.p5js.org/aferriss/sketches/SPu1I9yOJ

let img;
let amt = 40;
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

  // Draw our image once in the background
  //image(img, 0, 0);

  noStroke();
}


function draw() {
  background(0);

  // Loop over the x and y
  for (let y = 0; y <= height; y += numY) {
    for (let x = 0; x <= width; x += numX) {

      // Get the color at each position
      const pixel = img.get(x, y);

      // rainbow version
      fill(random(100),30,90);

      // hot pink version
      //fill(92,60,100);

      // Get the brightness
      const bri = brightness(pixel);
      
      // Map our brightness value to circle size + mouseX
      //const size = map(bri + mouseX, 0, width + 255, 0, numX * 2);
      const size = map(bri + 10, 0, width + 255, 0, numX * 10);
      
      // Draw each circle
      circle(x + numX / 2, y + numY / 2, size);
    }
  }

}


function keyPressed() {
    if (key === 's'){
      saveCanvas("sketch-18", "jpg");  
    }
}