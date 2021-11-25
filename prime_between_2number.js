
#include <stdio.h>

int main()
{ 
    int n = 1;
    int m = 70;
    int i ; 
    int j;
    for (i = n ; i < m ; i++){
        for(j = 2 ; j < i ; j++){
            if (i % j == 0)
            break;
        }
    if ( i == j){
            printf("prime number: %d \n" , i);
        }   
    }
     return 0;
}


Output ⇒ prime number: 2 
prime number: 3 
prime number: 5 
prime number: 7 
prime number: 11 
prime number: 13 
prime number: 17 
prime number: 19 
prime number: 23 
prime number: 29 
prime number: 31 
prime number: 37 
prime number: 41 
prime number: 43 
prime number: 47 
prime number: 53 
prime number: 59 
prime number: 61 
prime number: 67 


