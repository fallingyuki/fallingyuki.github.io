var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var initials = 'an'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img1 = loadImage('https://fallingyuki.github.io/diyps/diyps_images/img1.jpg');
  img2 = loadImage('https://fallingyuki.github.io/diyps/diyps_images/img2.jpg');
  img3 = loadImage('https://fallingyuki.github.io/diyps/diyps_images/img3.jpg');
  img4 = loadImage('https://fallingyuki.github.io/diyps/diyps_images/img4.jpg');
  img5 = loadImage('https://fallingyuki.github.io/diyps/diyps_images/img5.jpg');
  img6 = loadImage('https://fallingyuki.github.io/diyps/diyps_images/img6.jpg');
  img7 = loadImage('https://fallingyuki.github.io/diyps/diyps_images/img7.jpg');
  img8 = loadImage('https://fallingyuki.github.io/diyps/diyps_images/img8.jpg');
  img9 = loadImage('https://fallingyuki.github.io/diyps/diyps_images/img9.jpg');
  img10 = loadImage('https://fallingyuki.github.io/diyps/diyps_images/img10.jpg');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
    image(img1,mouseX-35, mouseY-35, 70, 70);
  } 
  else if (toolChoice == '2') { // second tool
    image(img2,mouseX-35, mouseY-35, 70, 70);
  } 
  else if (toolChoice == '3') { // third tool
    image(img3,mouseX-35, mouseY-35, 70, 70);
  } 
  else if (toolChoice == '4') { //fourth tool
    image(img4,mouseX-35, mouseY-35, 70, 70);
  } 
  else if (key == '5') { //fifth tool
    image(img5,mouseX-35, mouseY-35, 70, 70);
  } 
  else if (toolChoice == '6') { //sixth tool
    image(img6,mouseX-35, mouseY-35, 70, 70);
  } 
  else if (toolChoice == '7') { //seventh tool
    image(img7,mouseX-35, mouseY-35, 70, 70);
  } 
  else if (toolChoice == '8') { //eigth tool
    image(img8,mouseX-35, mouseY-35, 70, 70);
  } 
  else if (toolChoice == '9') { //ninth tool
    image(img9,mouseX-35, mouseY-35, 70, 70);
  } 
  else if (toolChoice == '0') { //tenth tool
    image(img10,mouseX-35, mouseY-35, 70, 70);
  } 
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
}
