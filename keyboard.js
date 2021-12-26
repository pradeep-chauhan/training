console.log("check")

var keyBoard = document.querySelector('.keyboard')

keyBoard.addEventListener('keydown' , e=> {
    console.log(e)
    if(e.keyCode === 50 || 90){                 /// case if we dont want @ and g in our box entered by user 
        alert("u cannot use that symbol")
        e.preventDefault()
    }

})


var keyBoard1 = document.querySelector('.keyboard1')

keyBoard1.addEventListener('keyup' , e=> {
    console.log(e)

})

var keyBoard2 = document.querySelector('.keyboard2')

keyBoard2.addEventListener('keypress' , e=> {
    console.log(e)

})
