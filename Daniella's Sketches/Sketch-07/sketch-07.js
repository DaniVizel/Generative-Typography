// original code
// https://medium.com/swlh/p5-js-texttopoints-function-c2e67c1c4682
//1. basic use of p5.Font.textToPoints()

let font
let fSize // font size
let msg // text to write
let pts = [] // store path data
    
function preload() {
   // preload OTF font file
  font = loadFont('Lato-BoldItalic.ttf')
}
    
function setup() {
  createCanvas(1000, 1000)
                
  fSize = 900
  textFont(font)
  textSize(fSize)
  msg = '!'
  pts = font.textToPoints(msg, 0, 0, fSize, {
    sampleFactor: 0.08, // increase for more points
    simplifyThreshold: 0.0 // increase to remove collinear points
      })
      console.log(pts) // { x, y, path angle }
    
      stroke(255)
      strokeWeight(2)
      noFill();
}
    
function draw() {
  background(0)

  const d = 10 + sin(frameCount/50.) * 50
  const angle = frameCount/100.

  push()
  translate(350, 800)

  for (let i = 0; i < pts.length; i++) {
    const p = pts[i]
    push()
    translate(p.x, p.y)
    rotate(angle)
    line(-d, -d, +d, +d)
    pop()
  }
  pop()

}

function keyPressed() {
    if (key === 's'){
      saveCanvas("sketch-07", "jpg");  
    }
  }