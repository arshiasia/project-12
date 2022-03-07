var path, pathImg
var player, playerImg
var leftBoundary
var rightBoundary

function preload(){
  //pre-load images
  playerImg=loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here


path=createSprite(200,200);
path.velocityY=4;
path.scale=1.2;
path.addImage(pathImg);
edges=createEdgeSprites();

player= createSprite (180,340,50,170)
player.addAnimation("running", playerImg)
player.scale=0.08

leftBoundary=createSprite(0,0,100,800)
leftBoundary.visible=false
rightBoundary=createSprite(410,0,100,800)
rightBoundary.visible=false
}

function draw() {
  background(200);
  player.x= World.mouseX;
  

if(path.y>400)
{
  path.y=height/2
}
player.collide(leftBoundary)
player.collide(rightBoundary)
player.collide(edges[3]);
drawSprites();
}
