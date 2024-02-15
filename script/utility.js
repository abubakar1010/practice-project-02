
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
}