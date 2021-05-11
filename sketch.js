var oldMan,player,bag, line, line1,line2, line3, button1, button2, player_running, crab, crabImage, crabGroup, edges, life= 3,flag = 0, gameState =0;
var time = 120, lionImage, lion, lionGroup, oldmanImage, gSound, eatSound, bagImage, form;
function preload(){
player_running = loadAnimation("Boy.gif");
crabImage = loadAnimation("Crab.gif");
lionImage = loadAnimation("Lion.gif");
oldmanImage = loadImage("OLDMAN.png");

eatSound = loadSound("BITE.mp3");
bagImage = loadImage("BAG.png");
}

function setup() {
  createCanvas(1200, 550);
  player = createSprite(37,450,20,20);
  player.addAnimation("running",player_running);
  player.scale = 0.23;
  oldMan = createSprite(34,46,20,20);
  oldMan.addImage(oldmanImage);
  oldMan.scale = 0.2;
  bag = createSprite(1180,20,15,15);
  bag.addImage(bagImage);
  bag.scale = 0.07;
  line = createSprite(0,375,250,2);
  line1 = createSprite(125,503,2,255);
  button2 = createSprite (90,0,10,30);
  line2 = createSprite(0,93,150,2);
  line3 = createSprite(75,40,2,105);
  button1 = createSprite(20,550,10,17);
  edges = createEdgeSprites();
  crabGroup = new Group();
  lionGroup = new Group();
  form = new Form()
}

function draw() {
  background("lightgreen");
  switch(gameState){
    case 0 :
     
      
    form.display();
    
  
     break;
    case 1 :
     form.hide()
      textSize(20);
  fill("black");
  strokeWeight(10);
  text("Life : "+life,1050,500)
  console.log(mouseX+" , "+ mouseY)
  text("Time : "+time,1050,450);
if(frameCount % 40 === 0){
  time = time -1;
}
  //adding movement to player
  if(keyDown("up")){
    player.y = player.y-3;
  }
  if(keyDown("down")){
    player.y = player.y+3;
  }
  if(keyDown("left")){
    player.x = player.x-3;
  }
  if(keyDown("right")){
    player.x = player.x+3;
  }

  if(player.isTouching(button1)){
    button1.destroy();
    line1.destroy();
  }
  if(crabGroup.isTouching(player)){
    life = life-1;
    crabGroup.destroyEach();
    eatSound.play();
  }

  if(lionGroup.isTouching(player)){
    life = life-1;
    lionGroup.destroyEach();
    eatSound.play();
  }

  if(life < 1 || time < 1){
    gameState = 2;
  }
  else {
    spawnCrabs();
    spawnLions();
  }
  if(player.x > 510 && player.y < 50 && keyDown("space")){
    flag = 1;
  }
  if(flag === 1){
    bag.x = player.x;
    bag.y = player.y;
  }
  if(player.isTouching(button2)&& flag === 1){
    line3.destroy();
    button2.destroy();
  }
if (player.x < 50 && player.y < 50 && flag === 1){
  gameState = 3;
}
// restricting the player in th cage
 player.collide(line);
 player.collide(line1);
 player.bounceOff(edges);
 player.collide(line2);
 player.collide(line3);
 
 
      break;
    case 2 :
      player.destroy();
    textSize(30);
    fill("black");
    strokeWeight(10);
    text("GAME OVER!",550,275);
   
      break;
      case 3 : 
      player.destroy();
      crabGroup.destroyEach();
    textSize(30);
    fill("black");
    strokeWeight(10);
    text("YOU WIN!",550,275);
      break;
  }
  
  drawSprites()
}
function spawnCrabs(){
  if(frameCount % 30 === 0){
    crab = createSprite(1100,350,15,15);
    crab.addAnimation("running",crabImage);
    crab.velocityX = (8);
    crab.velocityY = Math.round(Math.random(-9,9));
    crab.bounceOff(edges);
    crab.collide(line);
    crab.collide(line1);
    crab.scale = 0.3;
    crabGroup.add(crab);
  }
}
function spawnLions (){
  if(frameCount % 30 === 0){
    lion = createSprite (1100,125,15,15);
    lion.addAnimation("running" , lionImage);
    lion.velocityX = (8);
    lion.velocityY = Math.round(Math.random(-9,9));
    lion.bounceOff(edges);
    lion.collide(line1);
    lion.collide(line);
    lion.scale = 0.3;
    lionGroup.add(lion);
    // want green background and story with rules on the frst screen.
  }
}
