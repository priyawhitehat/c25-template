
  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(600,790,1200,20,ground_options);
    World.add(world,ground);

    box1=new Box(700,700,100,100);
    box2=new Box(1000,700,100,100);
    pig1=new Pig(850,700,50,50);

    log1=new Log(850,600,400,20,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("brown");
    rect(ground.position.x,ground.position.y,1200,20);
    fill("red")
    box1.display();
    box2.display();
    log1.display();
    fill("green")
    pig1.display();
    
    
}

