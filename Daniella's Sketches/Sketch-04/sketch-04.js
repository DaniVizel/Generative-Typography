//based on Zoma's demo 2021-03-17

let dotAngle = 0
let vertStep = 0

let x1 = 0 + 400
let y1 = 0 + 100
let x2 = 200 + 400
let y2 = 0 + 100
let x3 = 150 + 400
let y3 = 125 + 100
let x4 = 50 + 400
let y4 = 125 + 100

function setup(){
    createCanvas(1000, 1000);
    background(0);
}

function draw(){

/* exclaimation mark top
    rectMode(CENTER);
    noStroke;
    fill(255);
    rect(500, 300, 120, 450);
*/
    if (vertStep < 300){
    push();
    noFill();
    stroke(255);
    rectMode(CENTER);
    quad(x1, y1 + vertStep, x2, y2 + vertStep, x3, y3 + vertStep, x4, y4 + vertStep);
    pop();
    vertStep = vertStep + 3;
    }

// exclaimation dot
    if (dotAngle < 120){
    push();
    noFill();
    stroke(255, 255, 255, 50);
    strokeWeight(2);
    translate(500, 750);
    rotate(dotAngle);
    rect(0, 0, 120, 70);
    pop();
    dotAngle++;
    }
}

function keyPressed() {
    if (key === 's'){
      saveCanvas("sketch-04", "jpg");  
    }
}