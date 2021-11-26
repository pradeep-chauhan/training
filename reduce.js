var a = [10 , 12 , 5 , 7]
    var  maximum = a.reduce(maxofa)
    function maxofa(max,cur){
       if (cur > max ){
        max = cur }
        return max
    }
    
print(maximum);
  

output ==> 12
