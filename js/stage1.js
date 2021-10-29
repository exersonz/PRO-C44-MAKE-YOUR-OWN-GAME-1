function handleStage1()
{
  ditto.collide(ground);

  next.x = 950;
  next.y = 100;

  var step1, step2, step3;
  step1 = createSprite(300,400,150,15);
  step2 = createSprite(500,250,150,15);
  step3 = createSprite(700,100,200,15);

  ditto.collide(step1);
  ditto.collide(step2);
  ditto.collide(step3);

  if(ditto.collide(next))
  {
    stage = 2;
    ditto.x = 100;
    ditto.y = 560;
  }

  if(ditto.collide(stone))
  {
    ditto.x = 100;
    ditto.y = 560;
  }
}
