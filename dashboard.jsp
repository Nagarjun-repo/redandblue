<html>
    <head>
        <title>REDandBLUE</title>
        <link rel="icon" href="redandblue_logo.png" >
    </head>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="style_dashboard.css">
    <script src="script.js"></script>
    <script src="script_dashboard.js"></script>

    <body>

        <div class="navbar">
            <!--<img src="redandblue_logo.png" height="40px" alt="logo" style="margin-bottom: 15px;">!-->
            <img src="REDandBLUE.png"   height="30em" width = "200em" alt="REDandBLUE" style="padding:1em 0 1em 0.5em;">
            <img src="profile-picture.jpg" height="98%" alt="profile-pic" class="pos-profile">
        </div>

        <div class="workspace">

            <!--panel in the left side
                has button action-->
            <div class="leftpanel">
                <div class="present"><a>Inbox</a></div>
                <div class="hoverAction"><a>Outbox</a></div>
                <div class="hoverAction"><a>Settings</a></div>
            </div>

            <!--panel in the right
                has scroll bar
                has button action-->
            <div class="middlepanel">
                <input type="text" placeholder="search" class="search-bar">
                <button class="pos-button" type="button" onclick="manage_popup('mail_composer')">New mail</button>
                <div class="mailbox">mail llist</div>
                
                <%@ page import="javax.servlet.http.Cookie">
                <%
                    <!--acquiring the cookies from the response from the server-->
                    Cookie cookies = response.getCookies();   
                    String email = cookies[0].getValue();
                
                %>
                <!--mail composer pop up box-->
                <form class="pop-up_mailComposer" id="mail_composer" action="dashboard/push" method="post">
                    <!--menu bar-->
                    <div class="menubar" style="border: none;">
                        <p style="padding-left: 1em; color: whitesmoke;">New</p>
                        <button type="button" style="border: none;padding-right: 0.5em;padding-left: 0.5em;font-size:large; color:rgba(0, 0, 0, 0.496);
                        width:fit-content;height: fit-content;margin-top: 0.6em;border-radius:30%;" class="closeX" onclick="manage_popup('mail_composer')" >x</button>
                    </div>
                    <div class="from_field"><p class="description-field">From :</p><input type="text" form="mail_composer" class="input-field" style="width:93%" 
                                placeholder=<%= email %> readonly></div>
                    <div class="to_field"><p class="description-field">To :</p><input type="text" form="mail_composer" class="input-field" style="width:95%;" ></div>
                    <textarea class="sub_field" placeholder="Subject" form="mail_composer"></textarea>
                    <textarea class="content" form="mail_composer"></textarea>
                    
                    <!--Task bar-->
                    <div class="taskbar" style="border: none;">
                        <button type="submit" style="width:7%;height:80%;border-radius: 0.2em; border:none;background-color: #000408; color: whitesmoke;">Send</button>
                    </div>
                </form>
            </div>
        </div>
    </body>

</html>