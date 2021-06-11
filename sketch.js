const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas, backgroundImage;

var pc,npc,npc1;
var engine, world;



function setup(){
  canvas = createCanvas(displayWidth , displayHeight);

  engine = Engine.create();
  world = engine.world;
  pc=new PC(200,200,10,20);
  npc=new PC(100,100,20,20);
  npc1=new PC(50,200,20,20);

  
}


function draw(){
  background (220);
  Engine.update(engine);
  pc.display();
  npc.display();
  npc1.display();

 
}
