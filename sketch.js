var garden,garden1;
var mouse,mouse1,mouse2,mouse3;
var cat,cat1,cat2,cat3;
function preload() {
    //load the images here
    garden1=loadImage("images/garden.png");
    mouse1=loadImage("images/mouse1.png");
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
    cat1=loadImage("images/cat1.png");
    cat2=loadAnimation("images/cat2.png","images/cat3.png");
    cat3=loadImage("images/cat4.png");
    mouse3=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400,1000,800);
    garden.addImage("garden",garden1);
    mouse=createSprite(150,550,20,20);
    mouse.addImage("mouse1",mouse1);
    mouse.scale=0.1;
    cat=createSprite(850,500,20,20);
    cat.addImage("cat1",cat1);
    cat.scale=0.2;
    cat.debug=true;
    cat.setCollider("rectangle",10,10,cat.width,cat.height);
  
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
        cat.addAnimation("catRunning",cat3)
        cat.changeAnimation("catRunning")
        mouse.addAnimation("mousehappy",mouse3);
        mouse.changeAnimation("mousehappy");
        cat.velocityX=0;
        
      
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    mouse.addAnimation("mouseteasing",mouse2);
    mouse.changeAnimation("mouseteasing");
    
}
if(keyCode===RIGHT_ARROW){
   cat.velocityX=-4;
   cat.addAnimation("catrunning",cat2);
   cat.changeAnimation("catrunning") ;
}
}
