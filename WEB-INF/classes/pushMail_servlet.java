import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.Cookie;
import databaseconnectorapi.DatabaseConnectorAPI;

@MultipartConfig
public class pushMail_servlet extends HttpServlet {
    @Override
    public void doPost(HttpServletRequest req,HttpServletResponse res){
        
       try{
            Cookie[] ck = req.getCookies(); 
            int fromId=0;
            for(Cookie cookie:ck){
                 if(cookie.getName().equals("userId"));{
                      fromId = Integer.parseInt(cookie.getValue());
                 }
            }
            String[] toId = req.getParameter("toId").split(",");
            String sub = req.getParameter("sub");
            String msg = req.getParameter("msg");
            Thread push = new Thread(new DatabaseConnectorAPI.setMailArguments(fromId,toId,sub,msg));
            push.start();
       }
       catch(Exception e){
            System.out.println(e);
       }
    }
}