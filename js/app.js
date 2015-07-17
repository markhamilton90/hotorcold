
$(document).ready(function(){

  var guessCount = 0;
  var feedback = $('h2#feedback');
  var userGuess = $('input#userGuess');

  newGame();
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);

  	});

    // unbind old event so we can start with a new one
    $("a.new").click(function(){
      $('form').unbind();
      newGame();
    });

    function isValid(input) {
      input = parseInt(input);
      if (isNaN(input)) {
        feedback.text("You must enter a valid integer!");
        return false;
      }
      else if (input > 100 || input < 0) {
        feedback.text("You must enter a number between 1 and 100!");
        return false;
      }
      else 
        return input;
    }

    function tooHigh(number, realNum) {
      if (number - realNum >= 60) {
        feedback.text("You are on the planet Hoth.");
      }
      else if (number - realNum >= 50) {
        feedback.text("You are ICE cold.");
      }
      else if (number - realNum >= 45) {
        feedback.text("You're cold... VERY cold.");
      }
      else if (number - realNum >= 40) {
        feedback.text("You are cold.");
      }
      else if (number - realNum >= 30) {
        feedback.text("You are pretty chilly.");
      }
      else if (number - realNum >= 25) {
        feedback.text("You are lukewarm.");
      }
      else if (number - realNum >= 20) {
        feedback.text("You are warm.");
      }
      else if (number - realNum >= 15) {
        feedback.text("You're heating up!");
      }
      else if (number - realNum >= 10) {
        feedback.text("You are hot!");
      }
      else if (number - realNum >= 1) {
        feedback.text("You are super hot!");
      }
    }

    function tooLow(number, realNum) {
      if (realNum - number >= 60) {
        feedback.text("You are on the planet Hoth.");
      }
      else if (realNum - number >= 50) {
        feedback.text("You are ICE cold.");
      }
      else if (realNum - number >= 45) {
        feedback.text("You're cold... VERY cold.");
      }
      else if (realNum - number >= 40) {
        feedback.text("You are cold.");
      }
      else if (realNum - number >= 30) {
        feedback.text("You are pretty chilly.");
      }
      else if (realNum - number >= 25) {
        feedback.text("You are lukewarm.");
      }
      else if (realNum - number >= 20) {
        feedback.text("You are warm.");
      }
      else if (realNum - number >= 15) {
        feedback.text("You're heating up!");
      }
      else if (realNum - number >= 10) {
        feedback.text("You are hot!");
      }
      else if (realNum - number >= 1) {
        feedback.text("You are super hot!");
      }
    
    }

    function compare(guess, number) {
      if (isValid(guess) !== false) {
          var validGuess = isValid(guess);
          guessCount++;
          $('span#count').text(guessCount);

          if (validGuess > number) {
            tooHigh(validGuess, number);
          }
          else if (validGuess < number) {
            tooLow(validGuess, number)
          }
          else if (validGuess === number) {
            feedback.text("You guessed it! " + number);
          }
          else {
          }

          $('ul#guessList').prepend("<li>" + validGuess + "</li>");

        }
      }

    function newGame() {

      var theNumber = Math.floor((Math.random() * 100) + 1);
      userGuess.val("");
      feedback.text("Make your Guess!");
      guessCount = 0;
      $('span#count').text(guessCount);
    
      $('form').submit( function(e) {
        e.preventDefault();
        currentGuess = userGuess.val();
        userGuess.val("");

        compare(currentGuess, theNumber);
            
        });

    }

});


