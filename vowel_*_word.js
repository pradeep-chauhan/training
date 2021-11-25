var b = "Apple"
var a = []
for (i = 0 ; i<b.length ; i++){
    a.push(b[i])
}
for(i = 0 ; i < a.length ; i++){
    if (a[i] == 'A' || a[i] == 'E' || a[i] == 'I' || a[i] == 'O' || a[i] == 'U'  || a[i] == 'a' || a[i] == 'e'
     || a[i] == 'i'  || a[i] == 'o'  || a[i] == 'u'
    )
    a[i] = '*';
}
c = a.toString();
c = a.join("")
print(c)

Output ⇒ *ppl*


