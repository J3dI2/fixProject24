const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var grounsSprite,ground;
var engine, world, render;
var paper, bin1,bin2,bin3;
var binImage;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height-65,width,10);
	paper = new Paper(100,height-100,45,45);
	bin1 = new Dustbin(600,620);
	//bin2 = new Dustbin(700,500,100,PI);
	//bin3 = new Dustbin(650,550,100,PI/2);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
	})

	Engine.run(engine);
  
}

function draw() {

  rectMode(CENTER);
  background("black");

  //paper = paperObjectX;
  //paper = paperObjectY;

	paper.display();
	ground.display();
	bin1.display();
	//bin2.display();
	//bin3.display();
 
	bin1.visible=false;

	Engine.update(engine);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(Paper.body,Paper.paperpos,{x:85,y:-85});
	}
}


