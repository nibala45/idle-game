var score = 1; // Create a variable to store the score in

var title = new Title('ur mom dies if you dont get to a mill'); // Create a title element
var button = new Button('Joe', btnPress);   // Create a button element
var scr = new Text(score);                    // Create a text element

createButton('joe', btnPress); // Make a button
changeTitle('Clicker Game');

setInterval(btnPress, 10000);

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
}
