const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball,ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    ball =new Box(200,300,50,50);
    ball2 =new Box(200,100,9,17);
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

  


    console.log(ground);
}

function draw(){
    background("cyan");
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ball.show();
    ball2.show()

}