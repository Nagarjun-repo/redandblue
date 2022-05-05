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

//function gets inbox mails from the database and displays them in the user interface

function loadMails(url){

    $.ajax({
        url: url,
        type:'GET',
        success:function(response,status,xhr){
            console.log(response.length)
            console.log(response);
            let mailbox = $(".mailbox");
            mailbox.empty();

            /*let mail_container = $(".pop-up_mailComposer");

            for(let i=0;i<response.length;i++){
                let new_container = mail_container.clone();
                new_container.removeClass("pop-up_mailComposer");
                new_container.removeAttr("id","none");
                new_container.addClass("style_mailContainer");
                new_container.children(".taskbar").remove();
                new_container.children("from_field").val(response[i]["sender"]);
                new_container.children(".sub_field").val(response[i]["sub"]);
                new_container.children(".content").val(response[i]["message"]);
                mailbox.append(new_container)
            }*/

            //setting mail argument in simple mail container
            let mail_container = $(".simple_mail_container");

            for(let i=0;i<response.length;i++){
                let new_container = mail_container.clone();
                console.log(response[i]["message"]);
                new_container.attr("id",response[i]["msgid"]);
                new_container.children(".from").text("From :"+response[i]["sender"]);
                new_container.children(".subject").text("Subject :"+response[i]["sub"]);
                new_container.children(".message").text(response[i]["message"]);
                
                mailbox.append(new_container);         
            }
        }
    });

}




