// generate a random number between 0 and 100
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// function to add the incorrect guess to the list of previous guesses
function addIncorrectGuessToListOfPreviousGuesses(guessedValue, listOfPreviousGuesses) {
    listOfPreviousGuesses.push(guessedValue);
}

// function to display the list of previous guesses
function displayListOfPreviousGuesses(list, arg) {
    list.forEach((guess) => {
        // if a duplicate exists, don't rerender it to the again in the same element
        if (arg.innerText.includes(guess)) {
            return;
        } else {
            arg.innerHTML += `<li class="guesses__list__item">${guess}</li>`;
        }
    })
}

export {
    generateRandomNumber,
    addIncorrectGuessToListOfPreviousGuesses,
    displayListOfPreviousGuesses
};