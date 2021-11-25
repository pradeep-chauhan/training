var a = [1 , 2 , 3 , 5 , 8 , 0]
var b = [4 , 5 , 6 , 1 , 8 , 0]
var c = [7 , 8 , 9 , 1 , 5 , 0]

for (i = 0 ; i<a.length ; i++){
    for(j=0 ; j < b.length ; j++){
        for (k = 0 ; k < c.length ; k++){
              if(a[i] == b[j] && a[i] == c[k])
                {
                    print( a[i])
                }
            }
        }   
}
    
        
   
Output ⇒ 1
5
8
0


