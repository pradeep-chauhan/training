var oh = window.outerHeight  //for outer height
console.log('outer height' , oh)

var ow = window.outerWidth  //for outer width
console.log('outer width' , ow)

var ih = window.innerHeight  //for inner height
console.log('inner height' , ih)

var iw = window.innerWidth  //for inner width
console.log('inner width' , iw)


//scroll method

function scrollwin(){
    window.scrollBy(0,-150)
}
document.getElementById('btn-tp').addEventListener('click' , scrollwin)

function scrollbuy(){
    window.scrollBy({top: -40 , behavior: 'smooth'})
}
document.getElementById('btn-tp1').addEventListener('click' , scrollbuy)

function scrolltoo(){
    window.scrollTo(0 , 0);  //or ({top 0 , behavior:'smooth})
}
document.getElementById('btn-tp2').addEventListener('click' , scrolltoo)


// resize

var newWindow;
function openwin(){
    newWindow = window.open("" , 'newwindow' , "width=300 , height=200")
    newWindow.document.write("new window open")
}
function resizewin(){
    newWindow.resizeBy(200 , -200) //resizeto will work only one time where as by will work each time we click on button
    newWindow.focus();
}
document.getElementById('openbtn').addEventListener("click" , openwin)

document.getElementById('resizebtn').addEventListener("click" , resizewin)


//moving window

var newwindows
function openwi(){
    newwindows = window.open("" , 'blank(kuch bhi do yha par)' , "width=300 , height=200")
    newwindows.document.write("new window open")
}
function movewin(){
    newwindows.moveBy(100 , 150) //moveto will move to specific location
    newwindows.focus();
}

document.getElementById('openwinbtn').addEventListener("click" , openwi)

document.getElementById('movebtn').addEventListener("click" , movewin)
