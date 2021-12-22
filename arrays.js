concat method 

var a = ["Saab", "Volvo", "BMW"];
var b = ["john" , "doe" , "german"];
var c = ["Emil", "Tobias", "Linus"];
var d = a.concat(b,c)

console.log(d)

output ==> Saab,Volvo,BMW,john,doe,german,Emil,Tobias,Linus


indexof method 

var e = d.indexOf("doe")

console.log(e)


output ==> 4

join

var f = d.join(" a ")

console.log(f)

Saab a Volvo a BMW a john a doe a german a Emil a Tobias a Linus


lastofindex


var g = ['a' , 'b' , 'c' , 'b' , 1 , 2 ,3 ,'b' , 'f']
var f = g.lastIndexOf("b")

console.log(f)

7

push

var g = ['a' , 'b' , 'c' , 'b' , 1 , 2 ,3 ,'b' , 'f']
 g.push('q' , 's')


console.log(g)


output ==> a,b,c,b,1,2,3,b,f,q,s


Reverse

var g = ['a' , 'b' , 'c' , 'b' , 1 , 2 ,3 ,'b' , 'f']
g.reverse()


console.log(g)

output ==> [ 'f', 'b', 3, 2, 1, 'b', 'c', 'b', 'a' ]

shift

var g = ['a' , 'b' , 'c' , 'b' , 1 , 2 ,3 ,'b' , 'f']
g.shift()


console.log(g)


output ==> [ 'b', 'c', 'b', 1, 2, 3, 'b', 'f' ]


slice

var g = ['a' , 'b' , 'c' , 'b' , 1 , 2 ,3 ,'b' , 'f']
var h = g.slice(4 , 7)


console.log(h)


output ==> 1 2 3

sort

var a = ["Saab", "Volvo", "BMW","john" , "doe" , "german","Emil", "Tobias", "Linus"];

var b =a.sort()

print(b)


output ==> BMW,Emil,Linus,Saab,Tobias,Volvo,doe,german,john


splice 

var a = ["Saab", "Volvo", "BMW","john" , "doe" , "german","Emil", "Tobias", "Linus"];

a.splice (2,0,"abc" , "xyz")

print(a)

output ==> Saab,Volvo,abc,xyz,BMW,john,doe,german,Emil,Tobias,Linus

// this is used to add more value 


var a = ["Saab", "Volvo", "BMW","john" , "doe" , "german","Emil", "Tobias", "Linus"];

a.splice (2,4,"abc" , "xyz")

print(a)

output ==> Saab,Volvo,abc,xyz,Emil,Tobias,Linus

//after reaching position 2 of array it will delete 4 values 



tostring


var b = ['a','b','b']


var c = b.toString()

console.log(c)


output ==> a,b,b


unshift


var b = ['a','b','b']


 b.unshift('z')

console.log(b)

output ==> 'z' ,'a','b','b'



valueof


var b = ['a','b','b',1,2,3,4,'l']


c= b.valueOf()

console.log(c)


output ==> 'a','b','b',1,2,3,4,'l'
