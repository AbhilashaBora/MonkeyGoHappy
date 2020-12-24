
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(400,400);
    monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  
  
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  

  
}


function draw() {
  background("green");
  
  
  if (ground.x < 0){
    ground.x = 200;
  }
  
  if(keyDown("space")) {
    monkey.velocityY = -8;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  food();
  stones();
  
   
  monkey.collide(ground);
  
  drawSprites();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text ("Survival Time" + survivalTime,200,50); 
  
}

function food(){

 if (frameCount%80===0){
   Banana =createSprite (400,230,15,15);
   Banana.addImage(bananaImage);
  Banana.scale=0.1;
  Banana.y=Math.round(random(120,200))
   Banana.velocityX=-4;
    Banana.lifetime=100;
 }
 
}
  



function stones(){
  if (frameCount%200===0){
    Obstacles =createSprite (400,335,20,20);
    Obstacles.addImage(obstacleImage);
    Obstacles.scale=0.1;
    Obstacles.velocityX=-4;
    Obstacles.lifetime=100;
  }
}

