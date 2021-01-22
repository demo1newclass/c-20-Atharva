const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world;
var ball;








function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world= engine.world;


  var ball_option= {
          restitution: 2
  }

 ball= Bodies.circle(100,100,30,ball_option);
 World.add(world,ball);
 
 console.log(ball.position.x);




}

function draw() {
  background(0);  
  //rectMode(CENTER);
  //rect(200,200,50,50);

  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);



  
  drawSprites();
}