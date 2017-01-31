$(document).ready(function(){



  var button = $('#word');
  var guess = $('#letter');
  var input;
  var result;
  var buttonType;
  var letter;

  var found;

function clear(){
  input ='';
}

function hideShow() {
  $('#wordInput').toggleClass('hide');
  $('#word').toggleClass('hide');
  $('#letterInput').toggleClass('hide');
  $('#letter').toggleClass('hide');
}


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
      e.preventDefault();
      letter = $('#letterInput').val();
      console.log(letter +" LETTER Length: "+ input.length);

  });


  function createBoard(input){
    result= input.split('');
    console.log(result)
    for(let i =0; i < result.length; i++){
      $('main').append(
        "<div class='flexItems'><p id='"+i+"' class='hide'>"+result[i]+"</p></div>");
    }

  }

  // function search(found){
  //   if(letter == result[found]){
  //     console.log("match");
  //     $(`#${found}`).toggleClass('hide');
  //     // $('p').toggleClass('hide');
  //
  //   }
  // }

    /*/ var re = /[a-z]/i;

    for(let i =0; i < input.length; i++){
      console.log("user input "+letter);
      if(letter == result[i]){
        console.log("ITS TRUE "+result[i]);
        // $(`#${i}`).css('display', 'initial');
        // $(`p #${i}`).removeAttr('display');
      }
    }//end for
  }//end search*/


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
