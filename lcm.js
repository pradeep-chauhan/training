The LCM of two or more numbers is the smallest number that is evenly divisible by all numbers in the set.  for eg → lcm of 2 and 5 is 10 as it is divisible by both 2 and 5 

code

var n = 12 
var m = 3 

lcm = n*m

for (i = 1 ; i <= lcm ; i++){
    if (i % n == 0 && i % m == 0){
        break;
    }   
}
print(i)

Output ⇒ 12






