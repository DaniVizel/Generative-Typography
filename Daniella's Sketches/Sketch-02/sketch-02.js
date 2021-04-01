
function setup() {

    createCanvas(1000, 1000); //width and height
    background(60,); //rgb

    let CshadowY = 800;
    let CshadowX = 850;
    let CshadowW = 400;
    let CshadowH = 100;

    let Qp1X = 100
    let Qp1Y = 100

    //circle shadow
    noStroke(0);
    fill(0);
    ellipse(CshadowX, CshadowY, CshadowW, CshadowH);
    //filter(BLUR, 10);
    
    //poly shadow
    noStroke(0);
    fill(0);
    quad(Qp1X, Qp1Y + 40, Qp1X + 500, Qp1Y + 40, Qp1X + 750, Qp1Y + 500 + 40, Qp1X + 550, Qp1Y + 500 + 40);
    filter(BLUR, 10)

    //circle white
    noStroke(0);
    fill(245);
    ellipse(CshadowX, CshadowY - 40, CshadowW, CshadowH);

    //poly white
    noStroke(0);
    fill(245);
    quad(Qp1X, Qp1Y, Qp1X + 500, Qp1Y, Qp1X + 750, Qp1Y + 500, Qp1X + 550, Qp1Y + 500);
}


function keyPressed() {
    if (key === 's'){
      saveCanvas("sketch-02", "jpg");  
    }
    
}