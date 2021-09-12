var bg, bgImg
var ocean, oceanImg
var boat, boatImg, fisherman, fishermanImg, redFish, redFishImg, yellowFish, yellowFishImg, greenFish, greenFishImg, blueFish, blueFishImg, shoe, shoeImg
var fishingpole, fishingpoleImg, line, score, arc, arcImg



function preload(){
 bgImg = loadImage("sky.jpg")
  oceanImg = loadImage("ocean.png")
  boatImg = loadImage("boat.png")
  fishermanImg = loadImage("fisherman.png")
  redFishImg = loadImage("red fish.png")
  yellowFishImg = loadImage("yellow fish.png")
  greenFishImg = loadImage("green fish.png")
  blueFishImg = loadImage("blue fish.png")
  fishingpoleImg = loadImage("fishing pole.png")
  shoeImg = loadImage("shoe.png")
  arcImg = loadImage("fishing arc.png")
}




function setup() {
  createCanvas(800,800);
  
  bg = createSprite(400,200,800,400)
  bg.addImage("sky", bgImg)
  bg.scale = 0.5;

  ocean = createSprite(400,600,400,200)
  ocean.addImage("ocean", oceanImg)
  ocean.scale = 0.3;
  ocean.velocityX = -2;
  
  fisherman = createSprite(400,300,100,100)
  fisherman.addImage("fisherman", fishermanImg)
  fisherman.scale = 0.3;
  
  boat = createSprite(400,350,100,100)
  boat.addImage("boat", boatImg)
  boat.scale = 0.7;
  
  fishingpole = createSprite(425,250,100,100)
  fishingpole.addImage("fishingpole", fishingpoleImg)
  fishingpole.scale = 0.1
  
  arc = createSprite(465, 500)
  arc.addImage("arc", arcImg)
  arc.scale = 0.07
  
  
  score = 0
  
  
  
}






function draw() {
  background(255);
  
 //ocean.velocityX = -2;
  
  if (ocean.x < 0){
      ocean.x = ocean.width/8;
    }
  
  spawnredFish();
  spawnyellowFish();
  spawngreenFish();
  spawnblueFish();
  spawnshoe();
  
  drawSprites();
  
    fill("black")
    strokeWeight(3)
    stroke(0)

  line(460, 200, 460,mouseY+300)
  arc.y = World.mouseY + 300;
 // arc(460, mouseY+300, 30, 100, 320, HALF_PI);
  //arc = constrain(460, mouseY + 300);
 
  textSize(20)
  text("Score: "+ score, 700,50);
  fill("black")
  
  
  
} 

function spawnredFish() {
 if(frameCount %60 === 0) {
  redFish = createSprite(0,700,20,20);
   redFish.addImage("redFish", redFishImg);
   redFish.scale = 0.2;
   redFish.y = Math.round(random(375,450))
   redFish.velocityX = 3;
   if (arc.isTouching(redFish)) { 
    redFish.destroyEach();  
    score=score+2;
  }
  redFish.debug = true; 
  redFish.setCollider("rectangle", 0,0,200,200)
  redFish.depth = arc.depth;
  arc.depth = arc.depth + 1;
 }
}

function spawnyellowFish() {
 if(frameCount %80 === 0) {
  yellowFish = createSprite(800,700,20,20);
   yellowFish.addImage("yellowFish", yellowFishImg);
   yellowFish.scale = 0.05;
   yellowFish.y = Math.round(random(425,550))
   yellowFish.velocityX = -3;
 }
}

function spawngreenFish() {
 if(frameCount %120 === 0) {
  greenFish = createSprite(0,700,20,20);
   greenFish.addImage("greenFish", greenFishImg);
   greenFish.scale = 0.17;
   greenFish.y = Math.round(random(500,650))
   greenFish.velocityX = 4;
 }
}

function spawnblueFish() {
 if(frameCount %160 === 0) {
  blueFish = createSprite(800,700,20,20);
   blueFish.addImage("blueFish", blueFishImg);
   blueFish.scale = 0.1;
   blueFish.y = Math.round(random(600,750))
   blueFish.velocityX = -6;
 }
}
  
  
  function spawnshoe() {
 if(frameCount %100 === 0) {
  shoe = createSprite(800,700,20,20);
   shoe.addImage("shoe", shoeImg);
   shoe.scale = 0.1;
   shoe.y = Math.round(random(375,750))
   shoe.velocityX = -2;
 }
}

