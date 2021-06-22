var Cat = {  //curly brackets is objectd literal notation
  color : "brown",
  greeting : "purr!",
  sayHello : function () {  //this is our method
    return this.greeting; //this refers to the Cat object, not
    //any object outside of it
  }
}

function setup() {
  // put setup code here

  createCanvas(400, 400);
  textAlign (CENTER);
  var cat = Cat;  //this creates a reference to the cat object
 
  var cat2 = Cat;

  fill (cat2.color);  //this turns the text brown
  cat2.color = "blue";  //this turns the text blue
  fill (cat2.color);
  print (cat.color); //it only says blue in the console, which is a 
  //limiation, since it does not list cat only cat2
  text (cat.sayHello(), width / 2, height / 2);
}

