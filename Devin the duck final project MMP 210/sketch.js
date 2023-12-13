let joystick;

let ringImg

let ringsoundeffect

let DevintheduckImg;

let ring1 = true;
let ring2 = true;
let ring3 = true;
let ring4 = true;
let ring5 = true;
let ring6 = true;
let ring7 = true;
let ring8 = true;
let ring9 = true;
let ring10 = true;
let ring11 = true;
let ring12 = true;
let ring13 = true;

//may not work on safari
// Declare a "SerialPort" object
var serial;

// fill in the name of your serial port here:
//copy this from the serial control app
var portName = "COM7";

//this array will hold transmitted data
var inMessage = [0, 0];

function preload(){
  ringImg = loadImage('devinrings.png')
  DevintheduckImg = loadImage('Devin the duck (1).png');
    
  soundFormats('mp3', 'ogg');
  ringsoundeffect = loadSound('ring sound effect.mp3')

}


let xDisplacement = 0;

function setup() {
  frameRate(100);
  createCanvas(400, 400);
  rectMode(CENTER);
  
//     joystick = ( {vrx:'A0', vry:'A1', sw:7}, 0, width );
//    joystick = (joystick.valueX joystick
   
    // make an instance of the SerialPort object
  serial = new p5.SerialPort();

  // Get a list the ports available
  // You should have a callback defined to see the results. See gotList, below:
  serial.list();

  // Assuming our Arduino is connected,  open the connection to it
  serial.open(portName);

  // When you get a list of serial ports that are available
  serial.on('list', gotList);

  // When you some data from the serial port
  serial.on('data', gotData);
}

// Got the list of ports
function gotList(thelist) {
  // theList is an array of their names
  for (var i = 0; i < thelist.length; i++) {
    // Display in the console
    console.log(i + " " + thelist[i]);
  }
}

// Called when there is data available from the serial port
function gotData() {
  var currentString = serial.readLine();  // read the incoming data
  trim(currentString);                    // trim off trailing whitespace
  if (!currentString) return;             // if the incoming string is empty, do no more
  // console.log(currentString);
      inMessage = split(currentString, '&');   // save the currentString to use for the text
  inMessage[0] = map(inMessage[0], 0, 1023, 400, 0);
  inMessage[1] = map(inMessage[1], 0, 1023, 0,400);
}

function draw() {
  console.log(mouseX+ ", " + mouseY)
  background(50,150, 250);

//   if (frameCount == 10 || frameCount ==30  || frameCount ==60 || frameCount == 100 || frameCount == 120 || frameCount == 180 || frameCount == 200 ||   frameCount == 300 || frameCount == 350) {
//     ringsoundeffect.play();
//     console.log("ding")
//   }
  
  // if(frameCount < 30){
  //   ringsoundeffect.stop()
  // }
  
//loop//
fill(55, 150, 175);
  
arc (225,130, 250, 275, 3 * PI/2, PI/2 );
arc (200,130,220, 275, 3 * PI/2, PI/2 );
arc (175,130, 250, 275, PI/2, 3 * PI/2 );  
arc (200,130,220, 275, PI/2, 3 * PI/2 );  
rect(0,275,475,25);
rect(400, 275, 325,25);
 
 
endShape(CLOSE);
  
  

  if (frameCount < 200 || frameCount > 250){
    xDisplacement++;
  }
  
  //triangle//
  // push();
  // translate(xDisplacement, height/3);
  // if (frameCount >= 200 && frameCount < 250){
  //   rotate(-(frameCount-200)*TWO_PI/50);
  // }
  image(DevintheduckImg, inMessage[0],  inMessage[1], 54, 40);
  image(DevintheduckImg, inMessage[0],  inMessage[1], 54, 40);
  // pop();
  
  if (dist(inMessage[0], inMessage[1], 5,230) < 10 && ring1){
    ring1 = false;
     ringsoundeffect.play();
  }
  
  if (ring1){
    image(ringImg, 5, 230, 50, 40);
  }
  
  if (dist(inMessage[0], inMessage[1], 55,230) < 20 && ring2){
    ring2 = false;
     ringsoundeffect.play();
  }
  
  if (ring2){
    image(ringImg, 55, 230, 50, 40);
  }  
  
    
  if (dist(inMessage[0], inMessage[1], 110,230) < 20 && ring3){
    ring3 = false;
     ringsoundeffect.play();
  }
  
  if (ring3){
    image(ringImg, 110, 230, 50, 40);
  }  
  
  if (dist(inMessage[0], inMessage[1], 175,230) < 20 && ring4){
    ring4 = false;
     ringsoundeffect.play();
  }
  
  if (ring4){
    image(ringImg, 175, 230, 50, 40);
  }  
  
  if (dist(inMessage[0], inMessage[1], 242,200) < 20 && ring5){
    ring5 = false;
     ringsoundeffect.play();
  }
  
  if (ring5){
    image(ringImg, 242, 200, 50, 40);
  }  
  
  if (dist(inMessage[0], inMessage[1], 270,117) < 20 && ring6){
    ring6 = false;
     ringsoundeffect.play();
  }
  
  if (ring6){
    image(ringImg, 270, 117, 50, 40);
  }   
  
    if (dist(inMessage[0], inMessage[1], 255,40) < 20 && ring7){
    ring7 = false;
     ringsoundeffect.play();
  }
  
  if (ring7){
    image(ringImg, 255, 40, 50, 40);
  }  
  
    if (dist(inMessage[0], inMessage[1], 177,0) < 20 && ring8){
    ring8 = false;
     ringsoundeffect.play();
  }
  
  if (ring8){
    image(ringImg, 177, 0, 50, 40);
  }  
  
      if (dist(inMessage[0], inMessage[1], 100,40) < 20 && ring9){
    ring9 = false;
     ringsoundeffect.play();
  }
  
  if (ring9){
    image(ringImg, 100, 40, 50, 40);
  }  
  
    if (dist(inMessage[0], inMessage[1], 80,117) < 20 && ring10){
    ring10 = false;
     ringsoundeffect.play();
  }
  
  if (ring10){
    image(ringImg, 80, 117, 50, 40);
  }  
  
      if (dist(inMessage[0], inMessage[1], 111,200) < 20 && ring11){
    ring11 = false;
     ringsoundeffect.play();
  }
  
  if (ring11){
    image(ringImg, 111, 200, 50, 40);
  }  
  
        if (dist(inMessage[0], inMessage[1], 285,230) < 20 && ring12){
    ring12 = false;
     ringsoundeffect.play();
  }
  
  if (ring12){
    image(ringImg, 285, 230, 50, 40);
  } 
  
        if (dist(inMessage[0], inMessage[1], 350,230) < 20 && ring13){
    ring13 = false;
     ringsoundeffect.play();
  }
  
  if (ring13){
    image(ringImg, 350, 230, 50, 40);
  } 
  
  
//   //rings//
//   if (frameCount < 10){image(ringImg, 5, 230, 50, 40);}
//   if (frameCount < 24){image(ringImg, 55, 230, 50, 40);}
//   if (frameCount < 60){image(ringImg, 110, 230, 50, 40);}
//   if (frameCount < 120){image(ringImg, 175, 230, 50, 40);}       
//   if (frameCount < 210){image(ringImg, 242, 200, 50, 40);}
//   if (frameCount < 210){image(ringImg, 270, 117, 50, 40);}
//   if (frameCount < 210){image(ringImg, 255, 40, 50, 40);}
//   if (frameCount < 215){image(ringImg, 177, 0, 50, 40);}
//   if (frameCount < 232){image(ringImg, 100, 40, 50, 40);}
//   if (frameCount < 232){image(ringImg, 80, 117, 50, 40);}
//   if (frameCount < 232){image(ringImg, 111, 200, 50, 40);}
//   if (frameCount < 300){image(ringImg, 285, 230, 50, 40);}
//   if (frameCount < 360){image(ringImg, 350, 230, 50, 40);}
  
   
  
  
  
  
}