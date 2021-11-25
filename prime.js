Prime numbers are those numbers which are divisible by 1 and number itself eg 7 is a prime number as it is divisible by 1 and 7 only  whereas 14 is not a prime number as it is divisible by 1,2,14

code

var n = 3

for (i = 2 ; i < n ; i++ ){
    if (n % i === 0 ){
        print("not a prime");
        break;
    }
    else {
        print("prime number ")
    }
}

Output ⇒ prime number


