function validate(){
    var emaill=document.forms["form1"]["email"].value;
    // console.log(emaill);


    

    var b=emaill.length-4;
    var c=emaill.slice(b,emaill.length);
    console.log(c);

    var d=emaill.length-10;
    var e=emaill.slice(d,d+1);
    console.log(e);

    if(emaill==" "){
        alert("enter your email");
    }

    else if(c!==".com"){
        console.log("enter correct email");
    }
     else if(e!=="@"){
        console.log("enter @ symbol");
     }
    
    return false;
}





