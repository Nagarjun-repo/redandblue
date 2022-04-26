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
                <button class="pos-button" type="menu">New mail</button>
                <div class="mailbox">mail llist</div>

                <!--mail composer pop up box-->
                <div class="pop-up_mailComposer">
                    <div class="menubar"></div>
                    <div class="from_field"></div>
                    <div class="to_field"></div>
                    <div class="sub_field"></div>
                    <div class="content" role="textbox"><input type="text"></div>
                    <div class="taskbar"></div>
                </div>
            </div>
        </div>
    </body>

</html>