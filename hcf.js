The largest number that divides two or more numbers is the highest common factor (HCF) for those numbers.{ For example 30 (2 x 3 x 5), 36 (2 x 2 x 3 x 3), 42 (2 x 3 x 7), 45 (3 x 3 x 5). 3 is the largest number that divides each of these numbers, and hence, is the HCF for these numbers}

code

var n = 12 ;
var m = 16 ;

for(i=1 ; i <= n && m ; i++){
if (n % i === 0 && m % i === 0){
hcf = i
}
}

print(hcf)

Output ⇒ 4


