let username , useremail , usernumber

function uname(){
     username=document.getElementById("user").value ;
    console.log("name : "+username);
    var regexname = /[a-z]/i  
    if(regexname.test(username)){
        document.getElementById("iswrongname").style.visibility="hidden"
    }else{
        document.getElementById("iswrongname").style.visibility="visible"
    }
}
function uemail(){
     useremail = document.getElementById("user-email").value;
    console.log("email id is :" + useremail)
    var regexemail = /@/
    if(regexemail.test(useremail)){
        document.getElementById("iswrongemail").style.visibility="hidden"
    }else{
        document.getElementById("iswrongemail").style.visibility="visible"
    }
}

function unumber() {
     usernumber = document.getElementById("userno").value;
    console.log("phone number : " + usernumber)
    var regexnumber = /[\d]/
    if(regexnumber.test(usernumber)){
        document.getElementById("iswrongnumber").style.visibility="hidden"
    }else{
        document.getElementById("iswrongnumber").style.visibility="visible"
    }
    
}
function uinfo() {
localStorage.setItem("name" , username)
localStorage.setItem("email" , useremail)
localStorage.setItem("number" , usernumber)
}