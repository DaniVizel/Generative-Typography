function preload () {
    
}

function setup() {

    createCanvas(1000, 1000); //width and height
    background(40,); //rgb
}

function draw(){
    
    if (mouseIsPressed) {
        stroke(255);
    noFill(0);
    var rad = random(100) * 2;
    ellipse(500, mouseY, rad, rad);
    }
    
}

/*function keyPressed() {
    if (keyCode === ENTER){
        background(40,);  
    }
    
}*/

function keyPressed() {
    if (key === 's'){
      saveCanvas("sketch-01", "jpg");  
    }
    
}