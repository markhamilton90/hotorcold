
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

    function compare(guess, number) {
      if (isValid(guess) !== false) {
          var validGuess = isValid(guess);
          guessCount++;
          $('span#count').text(guessCount);

          if (validGuess > number)
            feedback.text("Too high: " + number);
          else if (validGuess < number)
            feedback.text("Too low: " + number);
          else if (validGuess === number)
            feedback.text("You guessed it! " + number);
          else {
          }

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


