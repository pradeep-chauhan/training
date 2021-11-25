It is used to find the root of the quadratic equation(ax^2 + bx + c) 

Formula 
Root = > (-b +/- sqrt(b^2 - 4ac))/2a

code

var a = 13
var b = 5
var c = 14
var d 
d = b*b - 4*a*c 

if (d>0){
    
    root1 = (-b + Math.sqrt(d))/(2*a)
    root2 = (-b - Math.sqrt(d))/(2*a)
    print("1st root :" , root1)
    print("2nd root :" , root2)
}else if (d == 0){
    root1 = (-b)/(2*a)
    root1 = (-b )/(2*a)
    print("1st root :" , root1)
    print("2nd root :" , root2)
} else if (d < 0){
    root1 = (-b)/(2*a)
    root2 = (-b)/(2*a)
    img = Math.sqrt(-d)/(2*a)
    print("1st root :" , root1 , img)
    print("2nd root :" , root2 , img)
}


Output ⇒ 
1st root : -0.19230769230769232 1.0197748910432962
2nd root : -0.19230769230769232 1.0197748910432962


