
var fixedRect, movingRect;
var fixedRect1;

function setup() {
  createCanvas(1200,800);
 
  fixedRect1=createSprite(200,100,50,80);
  fixedRect1.shapeColor="green";
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else if (isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
}

 else {
   movingRect.shapeColor="yellow";

   fixedRect.shapeColor="yellow";

   fixedRect1.shapeColor="yellow";
 }
//bounceOff(movingRect,fixedRect)
 isTouching();
  drawSprites();
}



