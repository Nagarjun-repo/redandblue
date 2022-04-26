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
                <form class="pop-up_mailComposer" >
                    <div class="menubar">
                        <p style="padding-left: 1em; color: whitesmoke;">New</p>
                        <button type="button" style="background-color: transparent; border: none; padding-right: 1em;">X</button>
                    </div>
                    <div class="from_field">
                       <div class="description-field"><p>From :</p></div>
                        <div class="input-field"><input></input></div>
                    </div>
                    <div class="to_field"><input class="to_field"></input></div>
                    <div class="sub_field"><textarea class="sub_field"></textarea></div>
                    <textarea class="content"></textarea>
                    <div class="taskbar"></div>
                </form>
            </div>
        </div>
    </body>

</html>