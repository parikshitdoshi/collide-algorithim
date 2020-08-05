
var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,200,30,80);
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";


}  

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.y-fixedRect.y);

  if(movingRect.x-fixedRect.x< fixedRect.width/2+movingRect.width/2 && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){

    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
movingRect.shapeColor = "blue";
fixedRect.shapeColor = "blue";

  }


  drawSprites();
}