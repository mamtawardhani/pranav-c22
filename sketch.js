//namespacing
const E=Matter.Engine
const W=Matter.World
const B=Matter.Bodies

var en, wo, box
var ground
function setup() {
  createCanvas(400,400);

  //creating engine
  en=E.create()

  //step 2: accessing the world from engine
  wo=en.world

  //creating a body and adding it to world

  box=B.rectangle(100,100,40,30)
  W.add(wo, box)

//JSON 
//Java Script Object Notation 
var a={ isStatic: true }

  ground=B.rectangle(200,350,400,20, a)
  W.add(wo, ground)
  console.log(wo)
  
}

function draw() {
  background(0);  
  E.update(en)

  rectMode(CENTER)

  rect(box.position.x,box.position.y,40,30)
  rect(ground.position.x,ground.position.y,400,20)
  rect(200,200,50,50)
  drawSprites();
}


//Matter.Engine
//Matter.World
//Matter.Bodies


//rectangle=> rect()
//circle=> ellipse()