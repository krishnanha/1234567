const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	ball1=Bodies.circle(200,50,10,option)
	ball2=Bodies.circle(205,50,10,option)
	ball3=Bodies.circle(210,50,10,option)
	ball4=Bodies.circle(215,50,10,option)
	ball5=Bodies.circle(220,50,10,option)
	rope1=new(ball1,roof,-80,0)
	rope2=new(ball2,roof,-80,0)
	rope3=new(ball3,roof,-80,0)
	rope4=new(ball4,roof,-80,0)
	rope5=new(ball5,roof,-80,0)

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
	  
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  ellipse(ball1.position.x,ball1.position.y,10)
  ellipse(ball2.position.x,ball2.position.y,10)
  ellipse(ball3.position.x,ball3.position.y,10)
  ellipse(ball4.position.x,ball4.position.y,10)
  ellipse(ball5.position.x,ball5.position.y,10)
  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
diplay()
	

  
  //create ellipse shape for multiple bobs here

 
}
diplay()
{
var pointA=this.rope1.BodyA.position,
var pointB=this.rope1.BodyB.position

strokeWeight(2)

var pointA=this.rope2.BodyA.position,
var pointB=this.rope2.BodyB.position

strokeWeight(2)

var pointA=this. pointA=this.rope1.BodyA.position,
var pointB=this.rope1.BodyB.position

strokeWeight(2)

var pointA=this.rope4.BodyA.position,
var pointB=this.rope4.BodyB.position

strokeWeight(2)

var pointA=this.rope5.BodyA.position,
var pointB=this.rope5.BodyB.position

strokeWeight(2)
}
//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode==RIGHT_ARROW){
	  Matter.Body.applyForce(ball1,{x:0,y:0},{x:0.05,y:0})
	}
	if(keyCode==RIGHT_ARROW){
		Matter.Body.applyForce(ball2,{x:0,y:0},{x:0.05,y:0})
	  }
	  if(keyCode==RIGHT_ARROW){
		Matter.Body.applyForce(ball3,{x:0,y:0},{x:0.05,y:0})
	  }
	  if(keyCode==RIGHT_ARROW){
		Matter.Body.applyForce(ball4,{x:0,y:0},{x:0.05,y:0})
	  }
	  if(keyCode==RIGHT_ARROW){
		Matter.Body.applyForce(ball5,{x:0,y:0},{x:0.05,y:0})
	  }
  }