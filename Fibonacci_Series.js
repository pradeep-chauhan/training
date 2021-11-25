The Fibonacci numbers are the numbers in the following integer sequence.0, 1, 1, 2, 3, 5, 8, 13, 21 
Formula fn = f(n-1)+f(n-2)
Where f0 = 0 and f1 = 1 

code

var a = 9
var f0 = 0
var f1 = 1 

for (i = 0 ; i <=a ; i++ ){
    print  (f0)
    next = f0+f1
    f0 = f1
    f1 = next   
}

Output ⇒ 0
1
1
2
3
5
8
13
21
34


