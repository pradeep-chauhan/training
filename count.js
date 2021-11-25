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




