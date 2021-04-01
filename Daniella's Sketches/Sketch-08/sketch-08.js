let angle = 0;
let bgCol = [47, 41, 69,];
let bgCol50 = [47, 41, 69, 50];
let exCol = [255, 188, 130];
/*let r = 10;
let g = 10;
let b = 10;*/

function setup(){
  createCanvas(1000,1000);
  background(bgCol);
  angleMode(DEGREES);
  frameRate(15);
}

function draw(){

background(bgCol50);

// line
  translate(500, 500);  
  rotate(angle);
  /*fill(exCol);
  noStroke(0);*/
  noFill(0);
  stroke(exCol);
  strokeWeight(4);
  rectMode(CORNER);
  rect(-25, 0, 60, 400);
  
  angle = angle + 5;
 /* r = r++;
  g = g++;
  b = b++;*/

  translate(-500, -500);
  //black circle
  fill(bgCol);
  noStroke(0);
  ellipse(width/2, height/2, 200, 200);
//white circle
  fill(exCol);
  noStroke(0);
  ellipse(width/2, height/2, 75, 75);


}

function keyPressed() {
    if (key === 's'){
      saveCanvas("sketch-08", "jpg");  
    }
  }
