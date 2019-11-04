var inquirer = require("inquirer");
var Word = require("./word");

var wordToSolve = new Word("cookie");

let guessCount = 9;

wordToSolve.letterArrayMaker();
// have to put this outside of mainGame or the arraymaker will keep pushing the whole thing to an array again

function mainGame() {
    inquirer.prompt([
        {
          name: "letter",
          message: "Guess a Letter!"
        } 
      ]).then(function(answers) {
        let guess = answers.letter;
    
        
        wordToSolve.checkString(guess);
        wordToSolve.fillIn()
        
        mainGame();
      });
}

mainGame();