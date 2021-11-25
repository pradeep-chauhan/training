var a = [1,2,3,4,57,12,30,5,49,11,75]
var h1 = a[0]
var h2 = a[1]
var h3 = a[2]

if(h1 > h2 && h1 > h3){
    temp = h1
    h1 = h2
    h2 = h3
    h3 = temp
}else if (h2 > h3 && h2 > h1){
    temp = h2
    h2 = h3
    h3 = h1
    h1 = temp
}else if (h3 > h1 && h3 > h1){
    temp = h3
    h3 = h1
    h1 = h2
    h2 = temp
}


for (i=3 ; i <a.length ; i++ ){
    if (a[i] > h1){
        h3=h2
        h2=h1
        h1=a[i]
    }else if (a[i] > h2){
        
        
        h3=h2
        h2 = a[i]
    }else{
        
        h3 =a[i]
    }
    

}print (h1 , h2 ,h3)


Output ⇒ 75 57 49

