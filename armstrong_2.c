#include <stdio.h>

int main()
{
    
    int num;
    int n = 100;
    int sum = 0;
    int rem  = 0;
    int m = 250;
    
    while (n <= m){
        
        num = n;
        sum = 0;
        while(num){
            rem = num %10;
            sum = sum + (rem*rem*rem);
            num = num / 10;
        }
        if (num == sum){
         printf("armstrong number %d" , num);
        }
    }
   return 0;
}

Output ⇒ armstrong number 153


