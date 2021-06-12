function setup() {
  // put setup code here

  createCanvas(480, 400);
  background(100);
  sayHello();
}

function sayHello () {
  textAlign(CENTER);
  text("hello function", width/2, height/2);
}