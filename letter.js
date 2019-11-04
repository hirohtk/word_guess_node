
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

module.exports = Letter;
  
