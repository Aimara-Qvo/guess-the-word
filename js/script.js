//The unordered list where the player's guessed letters will appear.
const guessedLetters = document.querySelector(".guessed-letters");
//The button with the text "Guess!" in it.
const guessButton = document.querySelector(".guess");
//The text input where the player will guess a letter.
const inputLetter = document.querySelector(".letter");
//The empty paragraph where the word in progress will appear.
const wordInProgress = document.querySelector(".word-in-progress");
//The paragraph where the remaining guesses will display.
const remainingGuesses = document.querySelector(".remaining");
//The span inside the paragraph where the remaining guesses will display.
const remainingGuessesSpan = document.querySelector(".guessed-letters span");
//The empty paragraph where messages will appear when the player guesses a letter.
const message = document.querySelector(".message");
//The hidden button that will appear prompting the player to play again.
const playAgainButton = document.querySelector(".play-again hide");

const word = "magnolia";

// Display our symbols as placeholders for the chosen word's letters
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

//Add an event listener for when a player clicks the Guess button.
guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const letterGuess = inputLetter.value;
    console.log(letterGuess);
    inputLetter.value = "";
});



