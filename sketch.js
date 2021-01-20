
var boyImage, treeImage
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
boyImage= loadImage("boy.png");
treeImage= loadImage("tree.png");
}

function setup() {
	createCanvas(1000, 700);

	
    
	engine = Engine.create();
	world = engine.world;
	
	
	//Create the Bodies Here.

    stone= new Stone(200,300,30);
    mango1= new Mango(555,172,30);
    mango2= new Mango(620,120,30);
    mango3= new Mango(640,200,30);
    mango4= new Mango(700,155,30);
    mango5= new Mango(680,75,30);
    mango6= new Mango(745,100,30);
    mango7= new Mango(780,195,30);
    mango8= new Mango(800,134,30);
    mango9= new Mango(860,190,30);
  
    slingShot= new SlingShot(stone.body,{x:298,y:479});
}


function draw() {
  Engine.update(engine);
  background("silver");
  textSize(15);

  image(boyImage,260,400,200,300);
  //image(treeImage, 450,-20,500,600);
   
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  slingShot.display();
  //ground.display();
  
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  


  textSize(15);
  text(mouseX+","+mouseY,mouseX,mouseY);
  
  
}
 function keyPressed(){
   if (keyCode==32){
     Matter.Body.setPosition(stone.body,{x:275,y:481})
   }
 }

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingShot.fly();
}
 
function detectollision(lstone,lmango){
	
  m=lmango.body.position
  s=lstone.body.position
  
  var distance= dist(s.x,s.y,m.x,m.y)
  if(distance>lmango.r+lstone.r){
 Matter.Body.setStatic(lmango.body,false);   
  }



  }
