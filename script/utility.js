
//* step-01: hide home page and show play ground

function hideAndShowElement(hiddenElementId,showElementId){

    const hide = document.getElementById(hiddenElementId).classList.add('hidden')

    const show = document.getElementById(showElementId).classList.remove('hidden')
}

//* step-02: generate random numbers and random alphabets 

function getRandomAlphabets(){

    const randomNumber = Math.round(Math.random() * 25)

    const alphabetsString = "abcdefghijklmnopqrstuvwxyz"

    const stringInArray = alphabetsString.split("")

    const randomAlphabets = stringInArray[randomNumber].toUpperCase()

    return randomAlphabets
}

/**
 * step-01: hide home page and show play ground

step-02: generate random numbers and random alphabets 

step-03: show random alphabets On screen

step-04: track user input and match with random alphabet

step-05: if match change alphabets 

step-06: set background

step-07: if match 05 condition then change background according to alphabets

step-08: update score

step-09: if chances is equal to 0 then end game

step-10: show user score 

step-11: if user press play again button then go back to playground
 */

//* step-03: show random alphabets On screen

function showElementOnScreen(){

    const groundScreen = document.getElementById("playScreen")

    const alphabets = getRandomAlphabets()

    groundScreen.innerText = alphabets

}

//* step-06: set background


function setBackground() {

    const target = document.getElementById("playScreen").innerText

    document.getElementById(target).classList.add('bg-orange-400')
}

function removeBackground(elementId) {

    const target = document.getElementById(elementId).innerText

    document.getElementById(target).classList.remove('bg-orange-400')
}


//* step-08: update score

function updateScore(elementID, value){

    const getElement = document.getElementById(elementID)

    getElement.innerText = value 
}

// * step-11: if user press play again button then go back to playground

function playAgain(){

    hideAndShowElement("finalResult", "playGround")

    updateScore("chances", 5)
    updateScore("score", 0)
}
