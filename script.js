function toggle(id){

    let obj = document.getElementById(id);

        if(obj.type == "password"){
            obj.type = "text";
        }
        else{
            obj.type = "password";
        }

}

function verify(){

    let pwd = document.getElementById("pwd");
    let repwd = document.getElementById("show");

    if(pwd.value != repwd.value){
        alert("Password mismatch");
        pwd.style.outline = "1px solid red";
        repwd.style.outline = "1px solid red";    
    }
    else{
        alert("Account created successfully");
        let buttonAction = document.getElementById("redirect");
        buttonAction.type = "submit";
     }
     
}
