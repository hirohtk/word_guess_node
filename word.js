var Letter = require("./letter");

var Word = function(theWordItself) {
    this.preLetterObjectArray = theWordItself.split("");
    this.letterObjectArray = [];

    this.test = function () {
        console.log(this.preLetterObjectArray);
    }

    //pushing new letter object for each of the letters that are gotten from the actual letter itself 
    this.letterArrayMaker = function () {

        for (j = 0; j < this.preLetterObjectArray.length; j++) {
            let thisLetter = this.preLetterObjectArray[j];
            this.letterObjectArray.push(new Letter(thisLetter));
        }
        //console.log(this.letterObjectArray);
    };
    // this is supposed to draw the entire guess line with underscores and actual letters guessed.
    // will update every time a new letter is input (checks, then draws);
    this.fillIn = function () {
        //console.log(this.letterObjectArray);
        for (i = 0; i < this.letterObjectArray.length; i++) {
            //this.letterObjectArray[i].toString();
            
            console.log(this.letterObjectArray[i].toString());
            
        }// still calling the object for some reason
        
    }

    this.checkString = function(letterGuess) {
        for (i = 0; i < this.letterArray.length; i++) {
        this.letterArray[i].check(letterGuess);
        }
    }

}


var cheetos = new Word("cheetos");


cheetos.test();
cheetos.letterArrayMaker();
cheetos.fillIn();
