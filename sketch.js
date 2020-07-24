const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var platform;
//var bird, slingShot;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(470, 325, 300, 17);
    platform2 = new Ground(870, 200, 300, 17);


    box1 = new BaseClass(700,320,70,70);
    box2 = new  BaseClass(920,320,70,70);
   

    box3 = new BaseClass(700,240,70,70);
    box4 = new  BaseClass(920,240,70,70);
   

    

    box5 = new BaseClass(810,160,70,70);
   

   

    
   // slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
   background (222);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   

    box3.display();
    box4.display();
   

    box5.display();
    
    //bird.display();
    platform.display();
    platform2.display();
    //log6.display();
   // slingshot.display();    
}

/*function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
if(keyCode===32){

    slingshot.attach(bird.body);
}*/








 