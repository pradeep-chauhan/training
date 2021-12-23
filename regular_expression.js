//pattern modifier 

let reg =/Ipsum/ //this is a regular expression in js if we right 


console.log(reg)
console.log(reg.source)


let s = "Lorem Ipsum is simply dummy text new of the printing and typesetting in the new industry. "
let result = reg.exec(s);
console.log('result:' , result)

let result2 = reg.test(s)  //if present it will be true otherwise viceversa
console.log('result2: ' ,result2)

//match() return an array of result or null 

let result3 = s.match(reg)
console.log ('result3 ' ,result3)

//search() return index of 1st match else -1
let result4 = s.search(reg)
console.log('result4: ',result4)

//replace returen new replace string wth all the replacement 
let result5 = s.replace(reg , 'On the other hand')
console.log('result5: ',result5)
