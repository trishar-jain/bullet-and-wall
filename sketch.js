var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

 wall = createSprite(1200, 200, thickness, height/2);
 bullet = createSprite(30, 200, 50, 15);

 speed=random(223,321);
 thickness=random(22,83);
 weight=random(30,52);

 bullet.velocityX = speed;


bullet.shapeColor="gold";





}

function draw() {
  background("black"); 

  if(hasCollided(bullet,wall))
  {
     bullet.velocityX=0;
     var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);

  if(damage>10)
     {
        wall.shapeColor=color(255,0,0);
        
     }


  if(damage<10)
  {
     wall.shapeColor=color(0,255,0);
 
  }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
    return false;
}

