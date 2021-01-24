
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Bear

var BearIMG

function preload()
{
BearIMG=loadImage("ezgif.com-gif-maker(27).png")	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  
  Bear=createSprite(500,500,90,90)
	Bear.addImage("Bear", BearIMG)
  Bear.scale=1

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



