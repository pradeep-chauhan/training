Palindrome  numbers are those  numbers in which  the number will remain the same even if we read from right to left or vice versa .
 eg=> 121 is a example of palindrome a number whereas 457 is not an ex of palindrome a number as its reverse will be 754  
 
 
 code

int main()
{
    int num , new , rev;
    
    num = 1001;
    rev = 0;
    new = num;
    while (num != 0){
        rev = (rev * 10 ) + (num % 10);
        num = (num /10) ;
    }
       if (new == rev){
        printf("yes it is a palindrome number" );
    }
    else {
        printf("no it is not a palindrome number" );
    }
    return 0;
}

Output ⇒ yes it is a palindrome number 

