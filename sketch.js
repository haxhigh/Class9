var ball;

function setup(){
  createCanvas(400,400);

  ball = createSprite(200,200,40,40);
  ball.y = 100;
  ball.x = 100;
  //ball.velocityX = -4;
  //ball.velocityY = 5;
}

function draw(){
  background("pink");
  if(keyDown("UP_ARROW")){
    ball.y = ball.y - 5;
  }
  if(keyDown("DOWN_ARROW")){
    ball.y = ball.y + 5;
  }
  if(keyDown("LEFT_ARROW")){
    ball.x = ball.x - 5;
  }
  if(keyDown("RIGHT_ARROW")){
    ball.x = ball.x + 5;
  }
  drawSprites();
}



