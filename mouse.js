function div1(e){
    console.log(e.type);        //it will write type of event in console
}
function div2(e){
    console.log(e.type);        //it will write type of event in console
}
function div3(e){
    console.log(e.type);        //it will write type of event in console
}

var divone = document.getElementById("one");

var divtwo = document.getElementById("two");

//divtwo.addEventListener("mousedown" , div1 )
//divtwo.addEventListener("mouseup" , div1 )
//divtwo.addEventListener("click" , div1 )
//divtwo.addEventListener("dblclick" , div1 )
//divtwo.addEventListener("mouseenter" , div1 )
//divtwo.addEventListener("mouseleave" , div1 )
//divtwo.addEventListener("mouseover" , div1 )
//divtwo.addEventListener("mouseout" , div1 )
//divtwo.addEventListener("mousemove" , div1 )
//divtwo.addEventListener("contextmenu" , div1 )

//bubble when an event happen on an element it first activate on handler then its parent all the way to other ancestors


var divthree = document.getElementById("three");

divthree.addEventListener("click" , div3 )
divtwo.addEventListener("click" , div2 )
divone.addEventListener("click" , div1 )
