const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
{
//pyramid1
var base1;
//level1
var block1;
var block2;
var block3;
var block4;
//level2
var block5;
var block6;
var block7;
//level3
var block8;
var block9;
//level4
var block10;

//pyramid2
var base2;
//level1
var block11;
var block12;
var block13;
//level2
var block14;
var block15;
//level3
var block16;

var hexagon;
var slingshot;
}
function preload(){
	
  }

function setup() {
	createCanvas(1300, 800);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(650,790,1300,5);
	//pyramid1
	base1 = new Ground(650,580,500,5);
	
	//level1
	block1 = new Block(550,565);
	block2 = new Block(620,565);
	block3 = new Block(690,565);
	block4 = new Block(760,565);
	//level2
	block5 = new Block(590,450);
	block6 = new Block(655,450);
	block7 = new Block(740,450);
	//level3
	block8 = new Block(620,370);
	block9 = new Block(700,370);
	//level4
	block10 = new Block(640,200);

	//pyramid2
	base2 = new Ground(1060,340,350,5);
	//level1
	block11 = new Block(965,290);
	block12 = new Block(1065,290);
	block13 = new Block(1165,290);
	//level2
	block14 = new Block(1015,195);
	block15 = new Block(1115,195);
	//level3
	block16 = new Block(1060,100);

	hexagon = new Polygon(200,200,100);
	slingshot = new SlingShot(hexagon.body,{x:200, y:100});

	Engine.run(engine);

}

function draw() {
	background(230);
	ground.display();
	//pyramid1
	base1.display();
	//level1
	block1.display();
	block2.display();
	block3.display();
	block4.display();
	//level2
	block5.display();
	block6.display();
	block7.display();
	//level3
	block8.display();
	block9.display();
	//level4
	block10.display();

	//pyramid2
	base2.display();
	//level1
	block11.display();
	block12.display();
	block13.display();
	//level2
	block14.display();
	block15.display();
	//level3
	block16.display();

	hexagon.display();
	slingshot.display();

}

function mouseDragged () {
    Matter.Body.setPosition (hexagon.body, {x: mouseX, y: mouseY});
}

function mouseReleased () {
    slingshot.fly ();
}


function keyPressed () {
    if (keyCode === 32) {
		Matter.Body.setPosition (hexagon.body, {x:200, y:100});
        slingshot.attach (hexagon.body);
    }
}