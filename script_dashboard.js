window.addEventListener("load",function(){
    //changing the url in the urlbar
    window.history.pushState(null,null,"dashboard");
});

function push_mail(){
    
    const mail_form = document.getElementById("mail_composer");
    
    let mail = new FormData(mail_form);

    let httpRequest = new XMLHttpRequest();

    let button = document.getElementById("mail_push_button");

    mail_form.remove();

    console.log(mail);

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

function manage_popup(id,action){
    
    if(id == "mail_composer"){
        
        let composer = $(".composerAndDisplayerTemplate").clone();
        composer.attr("id",id);
        composer.addClass("pop-up_mailComposer");
        composer.children(".menubar").children("p").text("New")
        composer.children(".from_field").remove();
        composer.children(".to_field").children("input").attr("form",id);
        composer.children("textarea").attr("form",id);
       
        composer.children(".menubar").children("button").click(function(){
            composer.remove();
        });
       
        composer.children(".taskbar").children("button").text("send");
        composer.children(".taskbar").children("button").attr("onclick","push_mail()");
        $(".middlepanel").append(composer);
    }

    else{
        console.log("invalid operation");
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

            let mail_container = $(".composerAndDisplayerTemplate");

            let simpleMailContainer = $(".simple_mail_container");

            for(let i=0;i<response.length;i++){

                let msgid = response[i]["msgid"];
                let from = response[i]["sender"];
                let to = response[i]["receipients"];
                let subject = response[i]["sub"];
                let message = response[i]["message"];

                let new_container = mail_container.clone();
                new_container.attr("id",msgid);
                new_container.addClass("style_mailContainer");
                new_container.children(".from_field").children("input").val(from);
                new_container.children(".from_field").children("input").prop("readonly",true);
                new_container.children(".to_field").children("input").val(to);
                new_container.children(".to_field").children("input").prop("readonly",true);
                new_container.children(".sub_field").val(subject);
                new_container.children(".sub_field").prop("readonly",true);
                new_container.children(".content").val(message);
                new_container.children(".content").prop("readonly",true);

                let menubar = new_container.children(".menubar");
                menubar.children("p").text(subject);
                menubar.children("button").css({"color":"white","background-color":"black"})
                menubar.children("button").click(function(){
                    $("#"+msgid).css("display","none");
                })
                new_container.children(".menubar").css("background-color","#F46E6E");

                let taskbar = new_container.children(".taskbar"); 
                taskbar.children("button").text("Forward");
                taskbar.css({"background-color":"white","border":"none"});
                taskbar.css("justify-content","space-around");
            
                mailbox.append(new_container);

                /************************************************************************************************** */

                let new_simpleContainer = simpleMailContainer.clone();
                new_simpleContainer.attr("id",msgid);
                new_simpleContainer.children(".from").text("From :"+from);
                new_simpleContainer.children(".subject").text("Subject :"+subject);
                new_simpleContainer.attr("onclick","expand_mailContainer("+msgid+")");
                
                mailbox.append(new_simpleContainer);
            }

        }
    });

}

function expand_mailContainer(id){

    let target_container = $("#"+id).css("display","flex");
}


function popupDisplayPicEditor(){
    let popup = document.getElementById("editDPPopup");
    
    if(popup.style.display == "none"){
        popup.style.display = "flex"; 
    }
    else{
        popup.style.display = "none";
    }
}

function uploadPicture(){
    console.log("inside function");
    $("#fileUploader").on("change",function(){
        
        let file = $("#fileUploader")[0].files;
        let pic = new FormData();
        pic.append("picture",file);
        console.log(pic);
        let httpRequest = new XMLHttpRequest();
        httpRequest.open("post","dashboard/upload_profile_picture");
        httpRequest.send(pic);

        httpRequest.onload = function(){
            if(httpRequest.status == 200){
                alert("Profile picture updated successfully");
            }
            else{
                alert("There was an error in uploading files");
            }
        }
    });
}