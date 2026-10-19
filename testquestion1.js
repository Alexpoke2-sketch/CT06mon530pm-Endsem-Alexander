let posX, xSpeed;

function setup(){
    createCanvas(600, 400);
    posX = width/ 2;
    xSpeed = 5;
    fill('limegreen');
}
function draw(){
    background("lightblue");
    circle(posX,200,50);
    if(posX+25 > width || posX-25 < 0){
        xSpeed = -xSpeed;
    }
    posX += xSpeed;
}