let username , useremail , usernumber

function uname(){
    username=document.getElementById("name").value ;
    console.log("name : "+username);  
    var regexname = /^[a-zA-Z]*$/
    
        if(regexname.test(username)){
            document.getElementById("iswrongname").style.visibility="hidden"
        }else{
            document.getElementById("iswrongname").style.visibility="visible"
        }
}

function uemail(){
    useremail = document.getElementById("email").value;
    console.log("email : " + useremail);
     regexemail = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-zA-Z]{2,30})$/
    if(regexemail.test(useremail)){
        document.getElementById("iswrongemail").style.visibility="hidden"
    }else{
        document.getElementById("iswrongemail").style.visibility="visible"
    }
}
function unumber() {
    usernumber = document.getElementById("number").value;
    console.log("number :" + usernumber)
     regexnumber = /^[0-9]{10}$/
    if(regexnumber.test(usernumber)){
        document.getElementById("iswrongnumber").style.visibility="hidden"
    }else{
        document.getElementById("iswrongnumber").style.visibility="visible"
    }
    
}

function dataofuser(){
    //var username=document.getElementById("name").value ;
    localStorage.setItem("name" , username);
    localStorage.setItem("email" , useremail);
    localStorage.setItem("number" , usernumber);

}