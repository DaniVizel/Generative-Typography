

function setup() {
    createCanvas(1000,1000);
    background(0);
}

function draw() {
    background(0, 0 ,0, 5);

    //rectX = random(-100, 1100);
    //rectY = random(-100, 1100);
    //rectW = 30;

    x1 = random(-100, 1100);
    x2 = x1 + 50;
    x4 = x1 + 5;
    x3 = x2 - 5;
    y1 = random(-100, 1100);
    y2 = y1;
    y3 = y1 + 100
    y4 = y3;
    

let colors = ['#9D8189', '#F4ACB7', '#FFCAD4', '#FFE5D9', '#D8E2DC'];
let rdmC = Math.floor(random(colors.length));
console.log(rdmC);
fill(colors[rdmC]);
//rect(rectX, rectY, rectW, 100);
quad(x1, y1, x2, y2, x3, y3, x4, y4);
ellipse(x1+25, y1 + 140, 40);


}
function keyPressed() {
    if (key === 's'){
      saveCanvas("sketch-17", "jpg");  
    }
}