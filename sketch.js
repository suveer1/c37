var ban,monkey,ground,GO,stone;
var player;
function preload(){ 
ban  = loadImage("bannana.png");
monkey=loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png")
ground=loadImage("ground.png");
GO = loadImage("gameover.png");
stone = loadImage("stone.png");
};
function setup() {
  createCanvas(displayWidth-20,displayHeight);
  var y = 800
  player = createSprite(camera.position.x=displayWidth/4,camera.position.y=y,50,50);
  player.addAnimation(monkey);
 
};
function draw() {
background("green");
drawSprites();
  
};
