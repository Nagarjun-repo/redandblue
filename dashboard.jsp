<html>
    <head>
        <title>REDandBLUE</title>
        <link rel="icon" href="redandblue_logo.png" >
    </head>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!--<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">-->
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="style_dashboard.css">
    
    <body onload="loadMails('get-inbox-mail')">

        <div class="navbar">
            <!--<img src="redandblue_logo.png" height="40px" alt="logo" style="margin-bottom: 15px;">!-->
            <img src="REDandBLUE.png"   height="30em" width = "200em" alt="REDandBLUE" style="padding:1em 0 1em 0.5em;">
            <img src="profile-picture.jpg" height="98%" alt="profile-pic" class="pos-profile">
        </div>

        <div class="workspace">

            <!--panel in the left side
                has button action-->
            <div class="leftpanel">
                <button class="present hoverAction" id="inbox_button" onclick="leftpanel_activity_manager('inbox_button'),loadMails('get-inbox-mail')"><p>Inbox</p></button>
                <button class="hoverAction" id="outbox_button" onclick="leftpanel_activity_manager('outbox_button'),loadMails('get-outbox-mail')"><p>Outbox</p></button>
                <button class="hoverAction" id="settings_button" onclick="leftpanel_activity_manager('settings_button')"><p>Settings</p></button>
            </div>

            <!--panel in the right
                has scroll bar
                has button action-->
            <div class="middlepanel">
                <input type="text" placeholder="search" class="search-bar">
                <button class="pos-button" type="button" onclick="manage_popup('mail_composer')">New mail</button>

                <!--panel displays list of mail shown content from and subject-->
                <div class="mailbox">
                </div>
                
                <!--template for mail composer pop up box and mail disply pop up box-->
                <form class="composerAndDisplayerTemplate" method="POST" enctype="multipart/form-data" >
                    <!--menu bar-->
                    <div class="menubar" style="border: none;">
                        <p style="padding-left: 1em; color: whitesmoke;"></p>
                        <button type="button" style="border: none;padding-right: 0.5em;padding-left: 0.5em;font-size:large; color:rgba(0, 0, 0, 0.496);
                        width:fit-content;height: fit-content;margin-top: 0.6em;border-radius:30%;" class="closeX" >x</button>
                    </div>
                    <div class="from_field"><p class="description-field">From :</p><input type="text" class="input-field" style="width:95%;" name="fromId"></div>
                    <div class="to_field"><p class="description-field">To :</p><input type="text" class="input-field" style="width:95%;" name="toId"></div>
                    <textarea class="sub_field" placeholder="Subject" name="sub"></textarea>
                    <textarea class="content" name="msg"></textarea>
                    
                    <!--Task bar-->
                    <div class="taskbar" style="border: none;">
                        <button type="button" id="mail_push_button" style="width:fit-content; height:80%; border-radius: 0.2em; border:none;background-color:#65C18C; color: whitesmoke;"></button>
                    </div>
                </form>
            </div>
        </div>

        <!--the following is a container which holds from, subject of inbox and outbox mails-->
        <div  class="simple_mail_container style_simpleMailContainer">
            <p class="from"></p>
            <p class="subject"></p>
            <p class="message"></p>
        </div>
    </body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="script.js"></script>
    <script src="script_dashboard.js"></script>

</html>