$(document).ready(function(){



  var button = $('#word');
  var guess = $('#letter');
  var reset = $('.reset');
  var input;
  var result;
  var letter;


//implement when all boxes are unhidden
function clear(){
  result ='';
  input ='';
  letter='';
  $('#wordInput').val('');
  $('.flexItems').remove().children();
}

function hideShow() {
  $('#wordInput').toggleClass('hide');
  $('#word').toggleClass('hide');
  $('#letterInput').toggleClass('hide');
  $('#letter').toggleClass('hide');
}

//click listener for the reset button
reset.click(function(e){
  e.preventDefault();
  clear();
  hideShow();
});

  // Event listener for click on submit word
  button.click(function(e) {
      e.preventDefault();
      input = $('#wordInput').val();
      console.log(input +" SUBMIT Length: "+ input.length);
      createBoard(input);
      hideShow();

  });

  // Event listener for letter click
  guess.click(function(e) {
    //prevent page reload
      e.preventDefault();
      //get the letter value from input field
      letter = $('#letterInput').val();
      console.log(letter +" LETTER Length: "+ letter.length);
      match();
      //each time submit letter is pressed reset the text value field
      $('#letterInput').val('');

  });


  function createBoard(input){
    result= input.split('');
    console.log(result)
    for(let i =0; i < result.length; i++){
      $('main').append(
        "<div class='flexItems'><p id='"+i+"' class='hide'>"+result[i]+"</p></div>");
    }
  }//end createBoard

  // var re = /[a-z]/i;

  function match(){
    for(let i=0; i<result.length; i++){
      if(letter == result[i]){
        $(`#${i}`).toggleClass('hide');
      }

    }//end for

  }//end MATCH


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
(*********)
create a function to start the count down. call it each time that the submit letter button is clicked

create display box with remaining guesses
then worry about hang man picture

Remove the separate input field and make it the same as with updated text -- create a reset function




*/

/*/event  to listen for with the enter
$('input').keypress(function(e) {
    if (e.which == 13) {
        e.preventDefault();
        $('input').click();
        input = $('input').val();
        console.log(input +" Length: "+ input.length);
        createBoard(input);

    }
});*/
