Armstrong numbers are those numbers that are equal to the sum of the cube of its digit 
Eg => 153 is an armstrong number as 1^3 + 5^3 + 3^3 = 1 +125 +27 = 153 whereas 123 is not an armstrong number as 1^3 + 2^3+ 3^3 = 1 +8 +27 = 36 which is not equal to the number itself 

code

#include <stdio.h>


int main()
{
    int num;
    int new;
    int n = 153;
    int rev = 0;
    num = n;
        while (num > 0){
            new = num %10;
            rev = rev + (new*new*new);
            num = num / 10;
    }
     if (rev == n){
            printf("yes it is an armstrong number");
        } else{
            printf("no it is not an armstrong number");
       }
}
Output ⇒  yes it is an armstrong number


