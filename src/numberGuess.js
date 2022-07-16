import { generateRandomNumber, addIncorrectGuessToListOfPreviousGuesses, displayListOfPreviousGuesses } from './guessModule.js';

const guessInput = document.getElementById('guessInput');
const submitGuessButton = document.getElementById('submitGuessButton');
const incorrectGuess = document.querySelector('.guesses__list');
const emptyMessage = document.getElementById('emptyMessage')
const message = document.getElementById('message');
const randomNumber = generateRandomNumber(0, 100);
const listOfPreviousGuesses = [];

// function to compare the input value with the random generated number
function compareGeratedValueWithPlayerGuessedValue(guessedValue, generatedValue) {

    if (guessedValue == '') {
        emptyMessage.style.color = 'red';
        return emptyMessage.innerText = 'Input Cant be empty';
    }

    if (guessedValue < generatedValue) {
        message.style.backgroundColor = 'red';
        message.innerText = 'Your guess is too low';
        return addIncorrectGuessToListOfPreviousGuesses(guessedValue, listOfPreviousGuesses);
    }

    if (guessedValue > generatedValue) {
        message.style.backgroundColor = 'red';
        message.innerText = 'Your guess is too high';
        return addIncorrectGuessToListOfPreviousGuesses(guessedValue, listOfPreviousGuesses);
    }

    if (guessedValue == generatedValue) {
        message.style.backgroundColor = 'green';
        return message.innerText = 'You got it!';
    }
}

// On submit call the compare function, if results are not positive add the guess to the list of previous guesses
submitGuessButton.addEventListener('click', function () {
    compareGeratedValueWithPlayerGuessedValue(guessInput.value, randomNumber);
    displayListOfPreviousGuesses(listOfPreviousGuesses, incorrectGuess);
})





