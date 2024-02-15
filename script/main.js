
const enterButton = document.getElementById('enterGameButton')

//* Enter the Game

enterButton.addEventListener('click', function() {

    hideAndShowElement("homePage","playGround")

    showElementOnScreen()
})


//* Continue game


document.addEventListener('keyup',function(event){

    

    //* detect user Press key

    const userKey = event.key.toUpperCase()

    console.log(userKey);

    const screenKey = document.getElementById('playScreen').innerText

    console.log(screenKey);

    if( userKey === screenKey){

        showElementOnScreen()

    }


})