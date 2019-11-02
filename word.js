var Letter = require("./letter");

var Word = function(theWordItself) {
    this.preLetterObjectArray = theWordItself.split("");
    this.letterObjectArray = [];

    this.test = function () {
        console.log(this.preLetterObjectArray);
    }

    //pushing new letter object for each of the letters that are gotten from the actual letter itself 
    this.letterArrayMaker = function (character, input) {

        for (j = 0; j < this.preLetterObjectArray.length; j++) {
            this.letterObjectArray.push(new Letter(character, input));
        }
        console.log(this.letterObjectArray);
    };
    // this is supposed to draw the entire guess line with underscores and actual letters guessed.
    // will update every time a new letter is input (checks, then draws);
    this.fillIn = function () {
        for (i = 0; i < this.letterArray.length; i++) {
            
            this.letterArray[i].toString();
        }  
    }

    this.checkString = function(letterGuess) {
        for (i = 0; i < this.letterArray.length; i++) {
        this.letterArray[i].check(letterGuess);
        }
    }

}


var cheetos = new Word("cheetos");


cheetos.test();
