$(document).ready(function(){

// ND: Lots of global variables here. Would really try to limit usage, especially if only one function is using it.
// Also, doesn't seem like you're using the last one.
  var button = $('#word');
  var guess = $('#letter');
  var reset = $('.reset');
  var input;
  var result;
  var letter;
  var tries = 10;
  var guessedLetters=[];
  var wordLength;
  var userGuess =0;
  var foo =0;

  //implement when all boxes are unhidden
  function clear(){
    // ND: so tries here is a global variable. You essentially have it twice since it's also in the global space.
    tries =10;
    userGuess=0;
    $('.tries').html(tries);
    $('#wordInput').val('');
    $('.flexItems .letterBoxes').remove().children();
    $('.guessedLetterBox').children().remove();
    hideShow();
  }

  function validateLetter(){
    var re = /[A-Za-z]/;
    var reTest = re.test(letter);
    // ND: Wouldn't leave code your not using in here
    // console.log(reTest);
    if(!reTest){
      alert('Sorry this game only likes letters!');
    }else if(letter.length !== 1){
      alert('You entered too many letters!');
    }else{
        match();
    }
  }//end validateLetter

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
  });

  //$('#button.word')
  //$('#button.letter')

  // Event listener for click on submit word
  button.click(function(e) {
      e.preventDefault();
      input = $('#wordInput').val().toUpperCase();
      // validateWord();
      wordLength = input.length;
      createBoard();
      hideShow();
    });


  // Event listener for letter click
  guess.click(function(e) {
    //prevent page reload
      e.preventDefault();
      //get the letter value from input field
      letter = $('#letterInput').val();
      //validate the input letter from the user
      validateLetter();
      //each time submit letter is pressed reset the text value field
      $('#letterInput').val('');
  });

  function alreadyGuessed(){
    // ND: So where you want this to go is to make sure a letter can't be picked more than once, correct?
    // ND: There's no alreadyGuessed array. What're you trying to loop through?
    for(let i=0; i<alreadyGuessed.length; i++){
      var flag = (letter == alreadyGuessed[i]) ? true : false;
    }
    return flag;
  }// end alreadyGuessed

  function createBoard(){
    result= input.split('');
    $('.tries').html(tries);
    for(let i =0; i < result.length; i++){
      $('main').append("<div class='flexItems letterBoxes'><p id='"+i+"' class='hide'>"+result[i]+"</p></div>");
    }
  }//end createBoard

  function match(){
    //
    $('.tries').html(--tries);
    letter =letter.toUpperCase();
    guessedLetters.push(letter);
    $('.guessedLetterBox').append("<div id='lettersGuessed' class='letterBoxes'><p>"+letter+"</p></div>");
    if(tries ==0){
      alert('You ran out of guesses!');
      clear();
    }
    for(let i=0; i<result.length; i++){
      if(letter == result[i]){
        $(`#${i}`).toggleClass('hide');
        // $(`#${i}`).removeClass('hide');
        userGuess++;
      }
      if(userGuess == wordLength){
        alert('Congrats! You guessed it, '+ input);
        clear();
      }
    }

  }//end MATCH


});//end document ready



// ND: Nice Pseudocode!
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


 /*
 button starts with id word and placeholder value
 upon click
 change id to letter and placeholder to enter letter
 during reset change id and placeholder back

*/
/*
Need to make the enter key work for the button
need to make sure they can not guess the same letter as previoulsy guessedLetters
do not take away one of the tries if the user guesses correctly...
Need to check that all boxes are turned over...
*/
