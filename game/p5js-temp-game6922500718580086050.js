var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
var img1;
var img2;
var img3;

function preload() {
  img1 = loadImage('https://fallingyuki.github.io/game/game_images/cheese.png');
  img2 = loadImage('https://fallingyuki.github.io/game/game_images/jerry.png');
  img3 = loadImage('https://fallingyuki.github.io/game/game_images/tomandjerry.png');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(220);
  text(("Score: " + score), width/2, 40);
  if (gameState=="L1"){
  levelOne();
  cursor('https://fallingyuki.github.io/game/game_images/jerry_cursor.png');
} 
  if (gameState=="L2"){
   levelTwo(); 
   cursor('https://fallingyuki.github.io/game/game_images/tom_cursor.png');
  }
  if (gameState=="L3"){
   levelThree(); 
   cursor('https://fallingyuki.github.io/game/game_images/spike_cursor.png');
  }
  if (gameState=="L4"){
    levelFour();
    cursor('WAIT');
  }
} // end draw


function levelOne(){
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>25){
// call level 2
 gameState= "L2";
  }
  line(ballx, bally, mouseX, mouseY);
  image(img1, ballx-(ballSize/2), bally-(ballSize/2), 60, 60);
} // end level one

function levelTwo(){
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>50){
// lvel 3
   gameState = "L3";
  }
  line(ballx, bally, mouseX, mouseY);
  image(img2, ballx-(ballSize/2), bally-(ballSize/2), 60, 60);
} // end level two

function levelThree(){
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>75){
// level 4
   gameState = "L4";
  }
  line(ballx, bally, mouseX, mouseY);
  image(img3, ballx-(ballSize/2), bally-(ballSize/2), 60, 60);
} // end level three

function levelFour(){
  text("THE END", width/2, height/2); 
}
