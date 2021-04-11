var fixedRect, movingRect
function setup(){
  createCanvas(400,400);
  fixedRect=createSprite(200,200,30,90)
  fixedRect.shapeColor="green"
  movingRect=createSprite(200,200,90,30)
  movingRect.shapeColor="green"
}
function draw(){
  background("lightblue");
  movingRect.x=mouseX
  movingRect.y=mouseY
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    &&movingRect.y-fixedRect.y<fixedRect.height/2+fixedRect.height/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="red"
    fixedRect.shapeColor="red"
  }
  else{
    fixedRect.shapeColor="green"
    movingRect.shapeColor="green"
  }
  drawSprites()
}