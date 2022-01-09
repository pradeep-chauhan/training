
    function myFunction(){
       var x = document.getElementById("menu"); 
        
        if(x.style.display == "block")
        {
            x.style.display = "none";
        }
        else{
            x.style.display = "block";
        }
    }

    console.log("javascript file loaded");
function validation() {
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
   
        
    localStorage.setItem("fname",fname)
    localStorage.setItem("lname",lname)
    localStorage.setItem("email",email)
   

   $("#thankyouModal").modal()
}