var Letter = require("./letter");


var Word = function(theWordItself) {
    this.preLetterObjectArray = theWordItself.split("");
    this.letterObjectArray = [];

    //pushing new letter object for each of the letters that are gotten from the actual letter itself 
    this.letterArrayMaker = function () {

        for (j = 0; j < this.preLetterObjectArray.length; j++) {
            let thisLetter = this.preLetterObjectArray[j];
            if (thisLetter === " ") {
                this.letterObjectArray.push(new Letter(" "));
            }   //I seem to be able to do this, making a new letter object named " "
            else {
                this.letterObjectArray.push(new Letter(thisLetter));
            }   
        }
    };
    // this is supposed to draw the entire guess line with underscores and actual letters guessed.
    // will update every time a new letter is input (checks, then draws);
    this.fillIn = function () {
        
        let letterObjectArrayChecked = [];
        let stringForDisplay;
        for (i = 0; i < this.letterObjectArray.length; i++) {
            
            letterObjectArrayChecked.push(this.letterObjectArray[i].toString());
        }   // since I switched the functions in letter.js to return rather than console log, letterObjectArrayChecked pushes the returned result
        stringForDisplay = letterObjectArrayChecked.join(" ");
        console.log("\n" + stringForDisplay + "\n");
    }

    this.checkString = function(letterGuess) {

        //BELOW WAS ATTEMPT AT CHECKING EVERYTHING EXCEPT SPACES.  BUT I JUST SET SPACE TO ALWAYS BE "CORRECT" and that solved the problem.
        //FOR THREE WORD OPTIONS THE BELOW WOULDNT HAVE WORKED (I ONLY SEPARATE CHECKING IN ONE SPOT)

        /*const isThereASpace = this.letterObjectArray.indexOf(" ");
        // if there is an index that is returned, where " " is found, then:
        if (isThereASpace != -1) {
            // remove the " " by using the index we found above, 1 specifies removing 1 element

            for (var a = 0; a < isThereASpace; a++) {
                this.letterObjectArray[a].check(letterGuess);
            }
            for (var b = isThereASpace + 1; b < this.letterObjectArray.length; b++) {
                this.letterObjectArray[b].check(letterGuess);
            }
        }
        else {*/

            for (k = 0; k < this.letterObjectArray.length; k++) {
                this.letterObjectArray[k].check(letterGuess);
            }
        
        
    }
}

module.exports = Word;

// this should go in Index.js
/*
var cheetos = new Word("cheetos");

cheetos.letterArrayMaker();
cheetos.checkString("e");
cheetos.fillIn();
*/