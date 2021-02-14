const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var doom;
var itsafloorwow;
var YEEET;
var help;
var math;
var s1, s2, s3 ,s4, s5, s6, s7, s8, s9, sX
var m1, m2, m3 ,m4, m5, m6, m7, m8, m9, mX
function preload() {
//preload the images here
doom = loadImage("office.png");
}

function setup() {
  createCanvas(3200, 1000);
  engine = Engine.create();
	world = engine.world;
  itsafloorwow = new ground(990,1000,2950,75);

  s1 = new squared(900,100,100,100);
	s2 = new ouch(900,100,100,100);
	s3= new squared(900,100,100,100);
	s4 = new ouch(900,100,100,100);
	s5 = new ouch(900,100,100,100);
	s6 = new squared(900,100,100,100);

	s7 = new ouch(800,100,100,100);
	s8 = new squared(800,100,100,100);
	s9 = new eatit(800,100,100,100);
	sX = new squared(800,100,100,100);
	m1 = new squared(800,100,100,100);
	m2 = new eatit(800,100,100,100);

	m3 = new squared(700,100,100,100);
	m4 = new ouch(700,100,100,100);
	m5 = new squared(700,100,100,100);
	m6 = new eatit(700,100,100,100);
	m7 = new ouch(700,100,100,100);
	m8 = new answer(700,100,100,100);
	m9 = new answer(700,100,100,100);
	mX = new squared(700,100,100,100);

  help = new baby(2300,100,200,200);
  YEET = new hulk(200,200,300);
  math = new rope(YEET.body,{x: 700, y: 120});
  Engine.run(engine);
  
}

function draw() {
  background(doom);
  itsafloorwow.display();
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  s6.display();
  s7.display();
  s8.display();
  s9.display();
  sX.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  mX.display();
  help.display();
  YEET.display();
  math.display();
}
function mouseDragged(){
	Matter.Body.setPosition(YEET.body,{x: mouseX, y: mouseY});
}
