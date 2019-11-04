var inquirer = require("inquirer");
var Word = require("./word");

let guessCount;

//wordToSolveArray holds your Word Constructors
var wordToSolveArray = [];
/*var words = ["cookie", 
"bacon", 
"pancake", 
"lima bean", 
"toast", 
"feta cheese", 
"pumpkin", 
"spaghetti", 
"chocolate chip cookie", 
"french toast",
];*/
var words = ["vanilla",
"mint chocolate chip",
"cookies and cream",
"strawberry",
"chocolate",
"rocky road",
"caramel",
"cookie dough",
"neapolitan"];

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
    if (wordToSolve.length <= 6) {
        guessCount = 10;
    }
    else if (wordToSolve.length > 6 && wordToSolve.length <= 12) {
        guessCount = 13;
    }
    else {
        guessCount = 18;
    }
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
        
        if (answers.letter.length === 1) {
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
        }
        else {
            console.log("Error: please make a guess, or make sure your guess is only one letter long.")
            mainGame();
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
        console.log("Winner!  You guessed the word correctly.  On to the next word!")
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