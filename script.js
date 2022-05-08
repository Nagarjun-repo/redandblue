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
$(document).ready(function(){
    
    let inputArr = $("form");

    //validatin first name field
    let fnamePattern = /^[a-zA-Z]{1,20}$/;
    inputArr.children("#fname").on('input',function(){
        if(fnamePattern.test($(this).val()) == false){
            console.log($(this));
            $(this).css("border","0.5px solid red");
        }
        else{
            $(this).css("border","0.5px solid lightgrey");
        }
    });

    //validating lastname field
    let lnamePattern = /^[a-zA-Z]{1,20}$/;
    inputArr.children("#lname").on('input',function(){
        if(lnamePattern.test($(this).val()) == false){
            console.log($(this));
            $(this).css("border","0.5px solid red");
        }
        else{
            $(this).css("border","0.5px solid lightgrey");
        }
    });

    //validating mobile no field
    let mobnoPattern = /^[0-9]{10}$/;
    inputArr.children("#mobno").on('input',function(){
        if(mobnoPattern.test($(this).val()) == false){
            console.log($(this));
            $(this).css("border","0.5px solid red");
        }
        else{
            $(this).css("border","0.5px solid lightgrey");
        }
    });

    //validating userName field
    let unamePattern = /^[a-zA-z0-9.*$#]+@redandblue+.com$/;
    inputArr.children("#uname").on('input',function(){
        if(unamePattern.test($(this).val()) == false){
            console.log($(this));
            $(this).css("border","0.5px solid red");
        }
        else{
            $(this).css("border","0.5px solid lightgrey");
        }
    });

    //validatin password field
    let pwdPattern = /^[a-zA-Z0-9$#>!%()]$/;
    inputArr.children("#pwd").on('input',function(){
        if(pwdPattern.test($(this).val()) == false){
            console.log($(this));
            $(this).css("border","0.5px solid red");
        }
        else{
            $(this).css("border","0.5px solid lightgrey");
        }
    });
});
