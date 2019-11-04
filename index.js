var inquirer = require("inquirer");
var Word = require("./word");

let guessCount;

//wordToSolveArray holds your Word Constructors
var wordToSolveArray = [];
//var words = ["cookie", "bacon", "pancake", "lima bean", "toast", "feta cheese", "pumpkin", "spaghetti", "lettuce"];
var words = ["test word", "bacon"];

let wordToSolve;

function setupAndChooseWord() {
    wordToSolveArray = [];
    for (i = 0; i < words.length; i++) {
        wordToSolveArray.push(new Word(words[i]));
    }
    let randomNumberToIdentify = Math.floor(Math.random() * words.length);
    wordToSolve = wordToSolveArray[randomNumberToIdentify];
}


function initialize() {
    guessCount = 9;

    wordToSolve.letterArrayMaker();
    // have to put this outside of mainGame or the arraymaker will keep pushing the whole thing to an array again
}

function mainGame() {
    wordToSolve.fillIn();
    // also have to put this outside of prompt or the user doesn't see the empty spaces
    
    inquirer.prompt([
        {
            name: "letter",
            message: "Guess a Letter!"
        }
    ]).then(function (answers) {
        if (guessCount < 1) {
            console.log("Game Over!  Please reload the program to try again.")
        }
        else {
            let guess = answers.letter;
            wordToSolve.checkString(guess);
            //wordToSolve.fillIn()
            guessCount--;
            console.log("\nYou have " + guessCount + " guesses remaining.")
            checkWin();
        }
    });
}

function checkWin() {

    wordToSolve; //this is an array

    var result = wordToSolve.letterObjectArray.every(checkEvery);
    //for every index in letterObjectArray, do the every check as I specify in checkEvery

    function checkEvery(thoseThatSatisfy) {
        return (thoseThatSatisfy.correct); //thoseThatSatisfy refers to each LetterObject.  
    }// since thoseThatSatisfy refers to each LetterObject, I don't need "this".  Can just do LetterObject.correct.  
    // supposed to return true if all LetterObject.correct is true.  
    
    //below:  meaning, if the every test is passed, then: 
    if (result) {
        wordToSolve.fillIn();
        console.log("Winner!  You guessed the word correctly.  Onto the next word!")
        setupAndChooseWord();
        initialize(); 
        mainGame();  
    }
    else {
        mainGame();
    }
}
setupAndChooseWord();
initialize();
mainGame();