var pname = document.getElementById("name");
var cname = document.getElementById("cname");
var email = document.getElementById("email");
var fname = document.getElementById("fname");
var message = document.getElementById("messageinput");
var GDPR = document.getElementById("gdpr");


pname.value = "";
cname.value = "";
email.value = "";
fname.value = "";
message.value ="";



function EmailValid(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
  }


function Submit(){
    

    if(pname.value == ""){
        alert("Name is required");
        return;
    }


    //E mail
    
    
    if(email.value == ""){
        alert("Email is required");
        return;
    }

    if(!EmailValid(email.value)){
        alert("E-mail not valid");
        return;
    }


    //Message
    
    if(message.value == ""){
        alert("Message is required");
        return;
    }

    //GDPR

    if(GDPR.checked == false){
        alert("You must agree to our terms")
        return;
    }

    GDPR.checked = false;


    var newurl = window.location.origin+"/msg" 
    + "?name=" + pname.value 
    + "&cname=" + cname.value 
    + "&email=" +email.value  
    + "&nr=" +fname.value  
    + "&message=" +message.value;

    window.location.href = newurl;
    
    
    



}

