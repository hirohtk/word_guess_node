# word_guess_node

This application utilizes Node.js to run a Javascript application that pits the user against a set number of underscores that matches the number of characters in a certain ice cream name.  

The user is expected to input a character on their keyboard to make a guess, letter by letter in order to guess the ice cream's name. The number of incorrect guesses left is shown- if the user guesses over this limit, they "lose the game", being prompted another word.

This application features input validation- an input that is blank, or longer than one character does not count towards the user's guess "score" but instead prints an error, prompting another (correct) guess.

This can be considered as a refactor of another repository of mine which was done early on in my bootcamp: https://github.com/hirohtk/word_guess_node.
