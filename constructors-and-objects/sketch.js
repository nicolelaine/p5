class Particle {   //making the cookie cutter
   constructor (pos) {
   this.name = "ball";
   this.color = "red";
   this.pos = pos; //p5 vector
   this.speed = 1;
  }
  bounce () {  //this is now a method
    if (this.pos.y >= height || this.pos.y <= 0) {  //this keeps in on the screen
         this.speed *= -1;
    }
    this.pos.y += this.speed; //it's the y because this is a vector
  }
}

var ball;

function setup() {
  // put setup code here

  createCanvas(400, 400);
  ball = new Particle (createVector(random(width), random(height))); //this creates a new instance 
  //of the particle - makes the  cookie, so to say
  //var particle = new Particle (createVector(random(width), random(height))); //this creates a new instance 
  //of the particle - makes the  cookie, so to say
 // print (particle.pos);  //this instance of the particle
 textAlign (CENTER);
}

function draw() {
  // put drawing code here
  background (255);
  fill (ball.color);
  ellipse (ball.pos.x, ball.pos.y, 50, 50);
  fill (255);
  text (ball.name, ball.pos.x, ball.pos.y);
  ball.bounce (); //this calls the bounce method

  
}