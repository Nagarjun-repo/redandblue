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
    
    let form = document.getElementById("mail_composer");
    let to = form.elements['to'];

    let mail_form = new FormData(form);
    
    let httpRequest = new XMLHttpRequest();

    console.log(to);
}

function intercept_submit_mail(){
    
    let mail_composer = document.getElementById("mail_composer");

    mail_composer.addEventListener("submit",function(Event){
        Event.preventDefault();
        push_mail();
    });
}

window.addEventListener("load",intercept_submit_mail);



