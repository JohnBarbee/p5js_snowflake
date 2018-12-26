var currentP;
var p = [];
var isDone = false;

function setup() {
  createCanvas(400, 400);
  addParticle();
}

function draw() {
  background(55);
  translate(width/2, height/2);
  if(currentP != undefined){
    if(isDone == false){
      currentP.snapMove(); 
    }

    for(var i = 0; i < p.length; i += 1){
      p[i].show(); 
    }
  }
}

function addParticle() {
  if(isDone == false){
  	currentP = new Particle((width/2) - 10, 0, 4, 2);
  	p.push(currentP);
  }
}

function mousePressed(){
 	currentP = undefined;
  p = [];
  isDone = false;
  addParticle();
}