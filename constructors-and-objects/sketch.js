class Particle {   //making the cookie cutter
   constructor (pos) {
   this.name = "astroid";
   this.color = "red";
   this.pos = pos; //pos is a p5 vector
   this.speed = 10;
   this.lifespan = 255;
  }
  bounce () {  //this is now a method
    //if particle position has gone outside the bondary
    //of our canvas = reverse speed!
    if (this.pos.y >= height || this.pos.y <= 0) {  //this keeps in on the screen
         this.speed *= -1;
    }
    //add speed to our particle postion
    this.pos.add(new p5.Vector(0, this.speed));
    if (this.lifespan > 0) {
      this.lifespan--;
    }
  }
}

var particles = [];

function setup() {
  // put setup code here

  createCanvas(400, 400);
  particles.push(new Particle(createVector(width/2, height/2)));
}

function draw() {
  // put drawing code here

  background (255);
  for (var i = 0; i < particles.length; i++) {
    var particle = particles[i];
        if (particle.lifespan <= 0) {
              particles.splice(i, 1);
              break;
        }  else {
    var particleColor = lerpColor (color(255), color (particle.color), particle.lifespan / 255);
        fill (particleColor);
        noStroke ();
        ellipse (particle.pos.x, particle.pos.y, 100, 100);

        fill (255); //white text
        textAlign (CENTER);
        text (particle.name, particle.pos.x, particle.pos.y);
        particle.bounce ();
  }
  }
}

function mousePressed () {
  particles.push(new Particle(createVector(width/2, height/2)));
}