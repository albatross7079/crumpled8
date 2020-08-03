const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,box1,paper1

function preload()
{
	
}

function setup() {
	
	
	var canvas = createCanvas(1400, 600);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	box1 = new Box(1200,420,300,250);
	
	ground1 = new Ground(700,550,1400,30);
	
	paper1 = new Paper(200,500,50);
	
	 Engine.run(engine);
  
}


function draw() {
	background(206,237,227);
	Engine.update(engine);
	
	paper1.display();
	
	ground1.display();
	
	box1.display();
	
	drawSprites();
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:550,y:-550});

		}
	}



