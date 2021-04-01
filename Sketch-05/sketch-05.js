let r;
let g;
let b;

function setup(){
    createCanvas(1000, 1000);
    background(0);
    frameRate(30);
}

function draw(){

r = random(10);
g = random(50, 255);
b = 200;

background(0, 0, 0, 10);

// exclaimation dot
rectMode(CENTER);
stroke(0);
fill(r, g, b, 90);
rect(mouseX, mouseY, 100, 100, 15);

// exclamation line
rectMode(CENTER);
stroke(0);
fill(r, g, b, 90);
rect(mouseX, mouseY - 250, 100, 300, 15);

}

function keyPressed() {
    if (key === 's'){
      saveCanvas("sketch-05", "jpg");  
    }
}