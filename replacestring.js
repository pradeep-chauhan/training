var n ="He is a football player";
var d;
p = n.split(" ");


for (i=0 ; i<p.length ; i++){
    if(p[i] == 'is'){
        p[i] = 'an'      
    }    
}
d = p.join(" ")
print("old word : " , n)
print("new word : " , d)

Output ⇒ 
old word :  He is a football player
new word :  He an a football player
