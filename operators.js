basic operators

var a = 10
var b = 6

c = a+b
d = a-b
e = a*b
f = a/b
g = a%b
h = (a+b) - (c*f)


console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(h)

output ==> 16
4
60
1.6666666666666667
4
-10.666666666666668


comparison 


var a = 10
var b = 6
var x = 5
var y = "55"
var z ="55"

c = x==a
d = y===z
e = b!=x
f = z!==b
g= a>b
h= a<b
i=x>=a
j=x<=b
var age = 5
k = (age<18)? "too young":"to old"


console.log("c:==" , c)
console.log("d:===" , d)
console.log("e:!=" , e)
console.log("f:!==" , f)
console.log("g:>" , g)
console.log("h:<" , h)
console.log("i:>=" , i)
console.log("j:<=" , j)
console.log("K: ?: ", k)


output==>
	c:== false
d:=== true
e:!= true
f:!== true
g:> true
h:< false
i:>= false
j:<= true
K: ?:  too young


logical

var a = 10
var b = 6
var w = 9
var x = 5
var y = "55"
var z ="55"

c = a<x&&b>w
d = a==w||b==6
e = !(a==b)
console.log("c: && ", c)
console.log("d: || ", d)
console.log("e: !&& ", e)

output

c: &&  false
d: ||  true
e: !&&  true




