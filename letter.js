
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
        else if (this.character === " ") {
            return " ";
            //this makes it so a blank space always displays a blank space (it's not subject to being a letter(character) or 
            //an underscore).  
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
        else if (this.character === " ") {
            this.correct = true;
        }// Doing this so that all Letter objects that have spaces render true for the space.  space itself is now a Letter object
        else {
            //console.log("Letter guessed Incorrectly");
        }
    }
     
  };

module.exports = Letter;
  
