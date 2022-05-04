window.addEventListener("load",function(){
    //changing the url in the urlbar
    window.history.pushState(null,null,"dashboard");
});

function manage_popup(id){
    let obj = document.getElementById(id);

    if(obj.style.display == "flex"){
        //close the pop up if open
        obj.style.display = "none";
    }

    else{
        //opne the pop up if open
        obj.style.display = "flex";
    }
}

//this function should be called only if the server successfuly responded for 
//inbox or outbox messages or setting page
function leftpanel_activity_manager(id){
    //getting elements of ids inbox_button,outbox_button,settings
    let inbox_button = document.getElementById("inbox_button");
    let outbox_button = document.getElementById("outbox_button");
    let settings_button = document.getElementById("settings_button");

    //checking the background colour of the clicked button
   
        inbox_button.style.backgroundColor = "white";


      outbox_button.style.backgroundColor = "white";

        settings_button.style.backgroundColor = "white";

    let clicked_button = document.getElementById(id);
    clicked_button.style.backgroundColor = "#006ED4";
}

function push_mail(){
    
    const mail_form = document.getElementById("mail_composer");
    
    const sub = mail_form.elements[2].value;
    const msg = mail_form.elements[3].value;
    const userId = mail_form.elements[4].value;

    let mail = new FormData(mail_form);

    let httpRequest = new XMLHttpRequest();

    let button = document.getElementById("mail_push_button");

    button.type = "reset";

    mail_form.style.display = "none";

    console.log(mail.values());

    httpRequest.open("POST","dashboard/push");
    httpRequest.send(mail);

    httpRequest.onload = function(){
        if(httpRequest.status == 200){
            alert("mail sent");
        }
        else{
            alert("There was a problem in sending the mail");
        }
    }

}


