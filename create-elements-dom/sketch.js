function setup() {
  // put setup code here

  createDiv ('<a href="">"Hi there, I am inside the DOM</a>');

  createP ('hi, I am a paragraph');

  createP ("My first paragraph element");
  createDiv ("I'm a div!")

  //button that does nothing
 createButton ("PRESS THIS!")

  //you can write html inside your createDiv
  createDiv ("<p>Paragraph inside a div</p>")

 //random kitten image
createImg ("http://placekitten.com/g/200/300");

 //slider with default value 50
 createSlider (0, 100, 50);

 //We can create generic HTML elements like
 createElement ('h1', 'I am an h1 p5.element');

 createElement ('h2', 'I am an h2 p5.element');

 createElement ('h3', 'I am an h3 p5.element');

 createElement ('h4', 'I am an h4 p5.element');

 createElement ('h5', 'I am an h5 p5.element');

 createElement ('h6', 'I am an h6 p5.element');

// for (var i = 1; i <= 6; i++) {
 //  createElement ('h' + i, 'I'm an h' + i)
// }
}

function draw() {
  // put drawing code here

}