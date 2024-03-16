let randomNumber = parseInt(Math.random() * 100 + 1)
// console.log(randomNumber)

const submitButton = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainingResult = document.querySelector('.lastResult');
const lowHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submitButton.addEventListener('click', function(e){
        e.preventDefault()  // hold the values untill I want.
        const guess = parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess)  // number from user input
    })
}

function validateGuess(guess){
    // valid the given input.
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }else if(guess < 1){
        alert("Please enter a number more than 1.")
    }else if(guess > 100){
        alert("Please enter a number less than 100. ")
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // check the guesses.
    if(guess === randomNumber){
        displayMessage(`You gussed it right number`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is Tooo low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is Tooo high`)
    }
}

function displayGuess(guess){
    // values clean last value or update guess remaning and update array also
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remainingResult.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    // Interact with dom directly.
    lowHigh.innerHTML = `<h2>${message}</h2>`

}

function endGame(){
    //  first clean value , or stop the value from user input
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    // take button reference
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        e.preventDefault()
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remainingResult.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}

