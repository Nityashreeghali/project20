var bgImg
var tom1Img,tom2Img,tom3Img;
var jerry1Img,jerry2Img,jerry3Img;
var tom;
var jerry;

function preload() {
bgImg=loadImage("images/garden.png")
tom1Img=loadAnimation("images/cat1.png")
jerry1Img=loadAnimation("images/mouse1.png")
tom2Img=loadAnimation("images/cat2.png","images/cat3.png")
jerry2Img=loadAnimation("images/mouse2.png","images/mouse3.png")
tom3Img=loadAnimation("images/cat4.png")
jerry3Img=loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1200,800);
//tom1=createSprite(500, 0, 60,30); 
tom=createSprite(1100,650,50,50)
tom.addAnimation("tomSitting",tom1Img)
tom.scale=0.2

jerry=createSprite(50,620,50,50)
jerry.addAnimation("jerrystanding",jerry1Img)
jerry.scale=0.2

}

function draw() {

    background(bgImg);
  
   
     
     if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.addAnimation("rest",tom3Img)
        tom.changeAnimation("rest")
        tom.scale=0.2
        tom.velocityX=0
        tom.x=200
        jerry.addAnimation("rest",jerry3Img)
        jerry.changeAnimation("rest")
        
     }
   
    drawSprites();
}
function keyPressed(){
    //For moving and changing animation write code here
    if(keyCode === RIGHT_ARROW){
      jerry.addAnimation("jerryTeasing",jerry2Img)
      jerry.changeAnimation("jerryTeasing")
      jerry.frameDelay=25;

      tom.addAnimation("tomRunning",tom2Img)
      tom.changeAnimation("tomRunning")
      tom.scale=0.2
      tom.velocityX=-3
  }
 

}


