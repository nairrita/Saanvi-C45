

var gases = []

function preload(){
  bg = loadImage("images/background.png")
}


function setup() {
  createCanvas(800,400);
  gas = new Gas(200,200,50,50)
  player = new Player(200,350,100,100)
}

function draw() {
  background(bg);  

  if(World.frameCount%50===0){
    gas = new Gas(200,5,50,50)
    gases.push(gas)

  }

  for(var i=0;i<gases.length;i++){
    gases[i].display();
    gases[i].move();
  }

  
  player.display()
  

  
}