
const enterButton = document.getElementById('enterGameButton')

//* Enter the Game

enterButton.addEventListener('click', function() {

    hideAndShowElement("homePage","playGround")

    showElementOnScreen()

    setBackground()

})


//* Continue game


document.addEventListener('keyup',function(event){

    

    //* step-04: track user input and match with random alphabet

    const userKey = event.key.toUpperCase()

    const screenKey = document.getElementById('playScreen').innerText

    if( userKey === screenKey){

    showElementOnScreen()


    removeBackground(userKey)

    const initial = document.getElementById('score')

    const initialScore = parseInt(initial.innerText )

    const values = initialScore + 1

    updateScore("score", values)


    }else{

        const initial = document.getElementById('chances')

    const initialScore = parseInt(initial.innerText )

    const values = initialScore - 1

    updateScore("chances", values)

    if( values === 0){

        hideAndShowElement("playGround","finalResult")
    }

    }

    
    setBackground()


})