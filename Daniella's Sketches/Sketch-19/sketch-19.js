// inspired by string art portraits on google images
// artist petros vrellis
var i = 1;

function setup() {
  createCanvas(1000, 1000);
  background(255);

  colorMode(HSB,100);
}


function draw() {
  background(0, 0, 100, 1);

i = i+1;
if (i >100){
  i = 1;
}

h1 =95;
h2 = 70;
strokeWeight(2);

  stroke(random(h1-5,h1+5), 40, 100);
  line(mouseX, mouseY, 0, 0);

  stroke(random(h1-5,h1+5), 40, 100);
  line(mouseX, mouseY, 1000, 0);

  stroke(random(h2-5, h2+5), 60, 100);
  line(mouseX, mouseY, 1000, 1000);

  stroke(random(h2-5, h2+5), 60, 100);
  line(mouseX, mouseY, 0, 1000);

//mask
noStroke();
fill('white');
rect(0, 0, 400, 1000);
rect(600, 0, 400, 1000);
rect(0,0,1000,100);
rect(0,700,1000,70);
rect(0,900,1000,100);

}

function keyPressed() {
    if (key === 's'){
      saveCanvas("sketch-19", "jpg");  
    }
}