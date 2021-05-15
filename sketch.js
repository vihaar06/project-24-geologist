const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone;


function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
    
    rubber1 = new Rubber(900,460,50);
    rubber2 = new Rubber(700,460,45);
    stone1 = new Stone(500,410,1200,20);
    hammer = new Hammer(10,100);
    ground = new Ground(600,height,1200,20);
    iron   = new Iron (200,400,100,100);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    stone1.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    ground.display();
    iron.display();
}