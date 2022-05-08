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
    fnameValidity = false;
    lnameValidity = false;
    mobnoValidity = false;
    unameValidity = false;

    
    //validatin first name field
    let fnamePattern = /^[a-zA-Z]{1,20}$/;
    inputArr.children("#fname").on('input',function(){
        fnameValidity = fnamePattern.test($(this).val());
        if(fnameValidity == false){
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
        lnameValidity = lnamePattern.test($(this).val());
        if(lnameValidity == false){
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
        mobnoValidity = mobnoPattern.test($(this).val());
        if(mobnoValidity == false){
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
        unameValidity = unamePattern.test($(this).val());
        if(unameValidity == false){
            console.log($(this));
            $(this).css("border","0.5px solid red");
        }
        else{
            $(this).css("border","0.5px solid lightgrey");
        }
    });

    //validatin password field
    $("form").children("button").on("click",function(event){
        if(fnameValidity && lnameValidity && mobnoValidity && unameValidity){
            verify();
        }
        else{
            $("form").children("input").css("border","0.5px solid red");
        }
    });
});
