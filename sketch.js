var bullet, wall
var speed,weight
var thickness
function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random,(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1200,200,60,height/2);
  car.velocityX=speed;
thickness=random(22,83)
speed=random(223,321)
weight=random(30,52)
  
} 

function draw() {
  background(255,255,255);
  

  drawSprites();


}
if(hasCollided(bullet,wall))
  {
   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   if(damage>10)
   {
    wall.shapecolor=colour(255,0,0);
   }
   
   
    
   
  
  if(damage<10)
  {
    wall.shapeColor=color(o,255,0);
  }
}  
function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge>=wallLeftEdge;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}



