
var car,wall;
var speed,weight;
var d;




function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500);
  car =createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="blue";
 
}

function draw() {
  background("green"); 
  if(keyDown(RIGHT_ARROW)){
    car.velocityX=speed;
  }
  if (car.collide(wall)){
    car.velocityX=0;
    d=(0.5*weight*speed*speed)/22500;
    if(d<100){
      car.shapeColor="blue";
    }
    if(d>=100&&d<=180){
      car.shapeColor="yellow";

    }
    if(d>180){
     car.shapeColor="red"
    }
  } 
  drawSprites();
  
}


