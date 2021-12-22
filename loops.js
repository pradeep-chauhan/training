for loop

var a = 5

for (i=0 ;  i<a ; i++){
    console.log("hello ")
}




hello
hello
hello
hello
hello


while loop


var a = 5
var i = 1
while(i<a){
    console.log("hi")
    i++
}


hi
hi
hi
hi


do while

var a = 5
var i = 1
do{
     console.log("bye")
     i++
}
while(i<a)


bye
bye
bye
bye


break

var a = 10
for (i=0 ; i<a ; i++){
    if(i===7){
        break
    }console.log(i)
}


0
1
2
3
4
5
6


continue

var a = 10
for (i=0 ; i<a ; i++){
    if(i===7){
        continue
    }console.log(i)
}


0
1
2
3
4
5
6
8
9

