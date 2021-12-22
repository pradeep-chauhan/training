charat

var a ="hello"

var b = a.charAt(2)
console.log(b)

output ==> l

charcodeat

var a ="Hello"

b=a.charCodeAt(0)
console.log(b)

output ==> 72 //give ascill 

concat

var a ="Hello "
var b =" how are you"

c=a.concat(b)
console.log(c)

output ==> Hello  how are you


fromcharcode

c=String.fromCharCode(65,69,73)
console.log(c)

output ==>AEI


indexof

var a ="Hello "

c=a.indexOf('l')
console.log(c)

outtput ==> 2

lastindexof

var a ="Hello "
var b =" how are you"

c=a.lastIndexOf('l')
console.log(c)

output ==> 3

match 

var a ="Hello javascript "
var b ="Hello "

c = a.match('rip')
print(c)

output ==> rip

replace

var a ="Hello javascript "
var b ="Hello "

c = a.replace('rip' , "new")
console.log(c)

output ==>
Hello javascnewt



search 

var a ="Hello javascript "



console.log(a.search('rip' ))

output ==> 12


slice


var a ="Hello javascript "


 var c = a.slice(0 , 5)
console.log(c)

output ==> hello


tolowercase

var a ="Hello javascript "


 var c = a.toLowerCase()
console.log(c)

output ==> hello javascript

touppercase

var a ="Hello javascript "


 var c = a.toUpperCase()
console.log(c)

output ==> HELLO JAVASCRIPT 


valueof

var a ="Hello javascript "



console.log(a.valueOf())


output ==> Hello javascript

split


var a = "How are you doing today?"
var b = a.split(" ")
console.log(b)

output ==> [ 'How', 'are', 'you', 'doing', 'today?' ]


substr

var a = "How are you doing today?"
var b = a.substr(1,6)
console.log(b)

output ==> ow are

substring

var a = "How are you doing today?"
var b = a.substring(1,6)
console.log(b)

output ==> ow ar
