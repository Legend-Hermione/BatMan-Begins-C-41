const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var maxDrops = 100;
var drops = [];

function preload(){
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    var canvas = createCanvas(400, 800);
    umbrella = new Umbrella(180, 690, 225);
    for (var i = 0; i < 500; i++) {
        drops[i] = new Drop();
      }
}

function draw(){
    background("black");
    umbrella.display();

    for (var i = 0; i < drops.length; i++) {
        drops[i].fall();
        drops[i].show();
      }
}   

