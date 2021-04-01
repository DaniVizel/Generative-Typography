// original code by p5user1
// https://editor.p5js.org/p5user1/sketches/KGT8KMUlb

let pg
let font
//let rgba = ['rgba(255, 0, 0, 0.9)', 'rgba(0, 255, 0, 0.9)', 'rgba(0, 0, 255, 0.9)']
let textSize = 1550
let posOffset = 10
let sizeOffset = 50
let tiles = 100
let tileSize
let loopDuration = 1 * 60

function preload() {
  font = loadFont('Lato-BoldItalic.ttf')
}

function setup() {
  createCanvas(1000, 1000)

  pg = createGraphics(width, height)
  pg.textFont(font)
  pg.textAlign(CENTER, CENTER)
  //pg.blendMode(SCREEN)
  pg.translate(width / 2, height / 3)
  pg.textSize(1000)
  pg.fill(255)
  //pg.text('!', -4, -4)
  //pg.fill(rgba[1])
  pg.text('!', 0, 0)
  //pg.fill(rgba[2])
  //pg.text('!', 4, 4)

  tileSize = width / tiles

  // Throttle frame rate for performance
  frameRate(24)
}

function draw() {
  
  background(0);

  let currentFrame = frameCount % loopDuration
  let t = currentFrame / loopDuration
  let u = map(t, 0, 1, 0, PI)
  
  for (let y = 0; y < tiles; y++) {
  	for (let x = 0; x < tiles; x++) {
      
      const waveX = sin(currentFrame * 0.02 * ( x * y ) * 0.01) * 100
      const waveY = cos(currentFrame * 0.02 * ( x * y ) * 0.01) * 100
      
      const sx = x * tileSize + waveX * sin(u)
      const sy = y * tileSize + waveY * sin(u)
      const sw = tileSize
      const sh = tileSize 

      const dx = x * tileSize 
      const dy = y * tileSize
      const dw = tileSize
      const dh = tileSize
      
      image(pg, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}

function keyPressed() {
    if (key === 's'){
      saveCanvas("sketch-06", "jpg");  
    }
}