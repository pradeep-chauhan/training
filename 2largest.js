var a = [1,2,3,5,7,4]
var h1 = a[0]
var h2 = a[1]

if(h1>h2){
    temp = h1
    h1 = h2
    h2 = temp
}
for(i=2 ; i<a.length ; i++){
    if(a[i] > h1){
        
        h2=h1
        h1=a[i]
        
    }
    else if (h2 < a[i]){
        
        h2 = a[i]
    }
   
} print(h2)


Output ⇒ 5

