$(document).ready(function(){

  var button = $('#word');
  var guess = $('#letter');
  var reset = $('.reset');
  var input;
  var result;
  var letter;
  var tries = 5;
  var guessedLetters=[];
  var newButton = $('#button');



  //implement when all boxes are unhidden
  function clear(){
    // location.reload();
    tries =5;
    $('.tries').html(tries);
    $('#wordInput').val('');
    $('.flexItems .letterBoxes').remove().children();
    $('.guessedLetterBox').children().remove();
    hideShow();
  }

  function validateLetter(){
    var re = /[A-Za-z]/;
    var reTest = re.test(letter);
    console.log(reTest);
    if(!reTest){
      alert('Sorry this game only likes letters!');
    }else if(letter.length !== 1){
      alert('You entered too many letters!');
    }else{
          match();
    }
  }//end validateLetter

  // function validateWord(){
  //   var reSpace = /[ ]/;
  //   var reLetters = /[A-Za-z]/;
  //   var reTestSpace = reSpace.test(input);
  //   var reTestLetters = reLetters.test(input);
  //   console.log('this is space');
  //   console.log(reTestSpace);
  //   console.log('this is letters');
  //   console.log(reTestLetters);
  //   if(reTestSpace && reTestLetters){
  //     alert('not allowed to enter more than one word');
  //     clear();
  //   }
  //
  // }

  function hideShow() {
    $('#wordInput').toggleClass('hide');
    $('#word').toggleClass('hide');
    // $('#wordInput').attr('id','letterInput')
    // $('#wordInput').removeattr('id');
    $('#letterInput').toggleClass('hide');
    $('#letter').toggleClass('hide');
  }

//listen for clik on button
  newButton.click(function(e){
    e.preventDefault();
    input = $('#button.word').val().toUpperCase();
    //validateWord
    $('#button.word').attr('id','button.letter')



  });

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

  function createBoard(){
    result= input.split('');
    $('.tries').html(tries);
    for(let i =0; i < result.length; i++){
      $('main').append("<div class='flexItems letterBoxes'><p id='"+i+"' class='hide'>"+result[i]+"</p></div>");
    }
  }//end createBoard

  function match(){
    $('.tries').html(--tries);
    letter =letter.toUpperCase();
    guessedLetters.push(letter.toUpperCase());
    $('.guessedLetterBox').append("<div id='lettersGuessed' class='letterBoxes'><p>"+letter+"</p></div>");
    if(tries ==0){
      alert('You ran out of guesses!');
      clear();
    }
    for(let i=0; i<result.length; i++){
      if(letter == result[i]){
        $(`#${i}`).toggleClass('hide');
      }
    }
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
 /*
 button starts with id word and placeholder value
 upon click
 change id to letter and placeholder to enter letter
 during reset change id and placeholder back

*/
/*
Need to make the enter key work for the button
need to make sure they can not guess the same letter as previoulsy guessedLetters
Need to check that all boxes are turned over...
*/
