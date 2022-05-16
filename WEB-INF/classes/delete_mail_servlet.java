import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Cookie;
import databaseconnectorapi.DatabaseConnectorAPI;

public class delete_mail_servlet extends HttpServlet {
    
    public void doPost(HttpServletRequest req, HttpServletResponse res){
        String[] msgInfo = req.getParameter("msgId").split("-");
        String box = msgInfo[1];
        int msgId = Integer.parseInt(msgInfo[0]);
        Cookie[] ck = req.getCookies(); 
            int userId=0;
            for(Cookie cookie:ck){
                 if(cookie.getName().equals("userId")){
                    userId = Integer.parseInt(cookie.getValue());
                 }
            }
           Thread deleteMail = new Thread(new DatabaseConnectorAPI.deleteMail(msgId,userId,box));
           deleteMail.start();
    }
}
