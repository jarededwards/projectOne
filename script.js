$(document).ready(function(){

  //var test = prompt('What word would you like to have your partner guess?');
  var button = $('button');
  var input;

  // Event setup using a convenience method
  button.click(function(e) {
      // console.log( "You clicked the button!");
      e.preventDefault();
      input = $('input').val();

      console.log(input +" Length: "+ input.length);
      createBoard();

  });
  //event  to listen for with the enter
  $('input').keypress(function(e) {
      if (e.which == 13) {
          e.preventDefault();
          $('input').click();
          input = $('input').val();
          console.log(input +" Length: "+ input.length);
          createBoard();
      }
  });

  function createBoard(){
    for(let i =0; i < input.length; i++){
      $('main').append('<div></div>');
    }
  }



});//end document ready



/*
Pseudocode
Create an input field that will allow user to input a word
create a variable that will take in the value of the word that was input by user
    -- MAKE SURE THAT ENTER ALSO WORKS AS A KEY PRESS

when submit button is clicked, hide the submit button and show a new input field that will allow the user guesses
create a flex box for divs
create a single line of code that creates a div (with a border and size x X x)
create a for loop that will generate as many divs in a flexbox as in word.length
allow user to guess while less than word.length

create display box with remaining guesses
then worry about hang man picture




*/
