var redhat, enemy;
var redhatimg ,enemyimg;


function preload(){
redhatimg = loadAnimation("run1.png","run2.png");
enemyimg  = loadAnimation("attack (1).png","attack (2).png","attack (4).png");

}


function setup() {
  createCanvas(800, 800);
  redhat = createSprite(50,200,10,10);
  redhat.addAnimation("jump",redhatimg);
  redhat.scale = 0.2;
  enemy  = createSprite(320,200,20,20);
  enemy.addAnimation("attack",enemyimg);
  enemy.scale = 0.2;
  
  
}

function draw() {
  background(220);
  
  drawSprites();
  
}