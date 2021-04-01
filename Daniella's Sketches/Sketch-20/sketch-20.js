// inspired by aferriss
// https://editor.p5js.org/aferriss/sketches/ARnOoDlG7

function setup() {
  createCanvas(1000, 1000);
  noFill();
}


function draw() {
  background('indigo');

  const c1= 'indigo';
  const c2 = 'royalblue';

  push();
  for(let i = 0; i<50; i++){
    for(let j = 0; j<50; j++){
      
      const y = i * 35 + j ;
      stroke(i < j ? c1: c2)
      line(0, y, width, y);
    }
  }
  noLoop();
  pop();

  noStroke();
  fill('indigo');
  ellipse(width/2, 60, 350, 1400);
  ellipse(width/2, 1000, 350);
}


function keyPressed() {
    if (key === 's'){
      saveCanvas("sketch-20", "jpg");  
    }
}