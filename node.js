var result = document.getElementById("inner").parentElement;
console.log('result' , result)

var result2 = document.getElementById("myid").parentNode;     //if there is no parent in node it will give null
console.log('result2' , result2)

//children and child node
var result3 = document.getElementById("outer").children;
console.log('result3' , result3)
document.getElementById("inner").children[1].style.background = "red" //to style a background of child
var result4 = document.getElementById("inner").children;  //children just show html tag
console.log('result4' , result4)

var result5 = document.getElementById("inner").childNodes;  //childnode show everything including text comment div html spaces etc tag 
console.log('result5' , result5)

//firstchild and firstelementchild

var result6 = document.getElementById("inner").firstElementChild;
console.log('result6' , result6)
var result7 = document.getElementById("inner").firstChild;
console.log('result7' , result7)


//lastchild and lastelementchild


var result8 = document.getElementById("inner").lastElementChild;
console.log('result8' , result8)
var result9 = document.getElementById("inner").lastChild;
console.log('result9' , result9)

//nextsibling and nextelemntsibling

var result10 = document.getElementById("child-c").nextElementSibling;
console.log('result10' , result10)
var result11 = document.getElementById("child-c").nextSibling;
console.log('result11' , result11)

//previousSibling and previousElementSibling

var result12 = document.getElementById("child-c").previousElementSibling;
console.log('result12' , result12)
var result13 = document.getElementById("child-c").previousSibling;
console.log('result13' , result13)

//node-name node-type

var result14 = document.getElementById("inner").nodeName;
console.log('result14' , result14)
var result15 = document.getElementById("inner").nodeType;       //nodetype --1 then it is a element  3 then it is a text
console.log('result15' , result15)