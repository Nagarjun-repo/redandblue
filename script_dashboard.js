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

    let mail_form = new FormData(document.querySelector("#mail_composer"));
    
    let httpRequest = new XMLHttpRequest();

    for(name in mail_form){
        console.log(name+""+mail_form[name]);
    }
}