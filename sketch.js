var stage0_bg, stage1_bg, stage2_bg, stage3_bg;
var ground;
var lava;
var ditto, dittoImg;
var next_arrow, arrow;
var stage = 0;
var stone, stoneImg;

function preload()
{
  stoneImg = loadImage("assets/stone.png");
  stage0_bg = loadImage("assets/stage0.jpg");
  stage1_bg = loadImage("assets/stage1.jpg");
  stage2_bg = loadImage("assets/stage2.jpg");
  dittoImg = loadImage("assets/ditto.png");
  next_arrow = loadImage("assets/next.png");
  lava = loadImage("assets/lava.jpg");
}

function setup() 
{
  createCanvas(1000,600);
  ground = createSprite(500,590,1000,30);

  ditto = createSprite(100,560,50,50);
  ditto.addImage(dittoImg);
  ditto.scale = 0.4;

  stone = createSprite(500,40,50,50);
  stone.addImage(stoneImg);
  stone.scale = 0.1;
  stone.visible = false;

  next = createSprite(950,550,50,50);
  next.addImage(next_arrow);
  next.scale = 0.2;
}

function draw() 
{
  switch(stage)
  {
    case 0:
      background(stage0_bg);
      handleStage0();
      handleDittoMovement();
      break;
    
    case 1:
      stone.visible = true;
      stone.velocityY = 10;
      background(stage1_bg);
      handleStage1();
      handleDittoMovement();
      break;

    case 2:
      
      handleStage2();
      background(stage2_bg);
      handleDittoMovement();
      break;

    case 3:
      handleStage3();
      handleDittoMovement();
      break;

    default:
      break;
  }
  handleDittoLimitation();
  drawSprites();
}

function handleDittoMovement()
{
  if(keyDown("space") && ditto.y > 0)
  {
    ditto.velocityY = -20;
  }

  if(ditto.velocityY < -10)
  {
    ditto.velocityY = -10;
  }

  ditto.velocityY += 0.95;

  if(keyDown(RIGHT_ARROW))
  {
    ditto.x += 10;
  }

  if(keyDown(LEFT_ARROW))
  {
    ditto.x -= 10;
  }
}

function handleDittoLimitation()
{
  if(ditto.x < 10)
    ditto.x = 10;

  if(ditto.x > 990)
    ditto.x = 990;

  if(ditto.y < 10)
    ditto.y = 10;

  if(ditto.y > 590)
    ditto.y = 590;
}