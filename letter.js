
//var letterChosen = process.argv[2];

//var actualLetter = "a";

var Letter = function(character) {
    
    this.character = character;
    //this.input = input;
    this.correct = false;
    this.toString = function () {
        if (this.correct) {
            //console.log(character);
            return character;
        }
        else {
             //console.log("_");
             return "_";
        }
    }
    this.check = function (inputArg) {
        if (this.character === inputArg) {
            this.correct = true;
            //console.log("Letter Guessed Correctly");
        }
        else {
            //console.log("Letter guessed Incorrectly");
        }
    }
     
  };

/*  function test(letterGuess) {
    var a = new Letter("a", letterGuess);
    var b = new Letter("b", letterGuess);
    var c = new Letter("c", letterGuess);
    var d = new Letter("d", letterGuess);
    var e = new Letter("e", letterGuess);
    a.check();
    a.display();
}

test(letterChosen);
   */

  // Exporting our Letter constructor. We will require it in movie.js
module.exports = Letter;
  
