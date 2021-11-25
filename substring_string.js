
var b = false;
var n ="how are you";
var m = "are"

p = n.split(" ")
q = m.split(" ")
for (i = 0 ; i < p.length ; i++){
    if(p[i] == q){
        b=true;
         }
}
if(b==true)
{
    print("yes it contain the word : " + m + " in the given sentence :" , n)
}
else if(b==false)
{
    print("no it does not contain the word : " + m + "in the given sentence :" , n)

Output ⇒ yes it contain the word : are in the given sentence : how are you
//
Or {print(n.includes(m))}


