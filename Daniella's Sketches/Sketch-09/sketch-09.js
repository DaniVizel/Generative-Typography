// based on https://creative-coding.decontextualize.com/changes-over-time/
// inspired by https://dailydrawbot.tumblr.com/post/162202967319/i-will-speak-as-part-of-the-lubalin-series-of
let myFont;
let x = 0;
let angle = 2;

function preload() {
  myFont = loadFont('Lato-BoldItalic.ttf');
}

function setup() {
  createCanvas(1000, 1000);
  background(11, 13, 64);
  frameRate(30);
}

function draw(){
  translate(500, 900);
  background(11, 13, 64, 50);

  fill(255);
  textSize(600);
  //rotate(radians(45));
  rotate((radians(x)));
  text('!', -100, -200)
  //text('!', sin(frameCount/10) * 250 -100, height/2);

  x = x + angle;

  if (x > 45) {
    angle = -2
  }
  if (x < -45) {
    angle = +2
  }

}

function keyPressed() {
    if (key === 's'){
      saveCanvas("sketch-09", "gif");  
    }
  }
