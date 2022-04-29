import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Cookie;
import databaseconnectorapi.DatabaseConnectorAPI;

public class pushMail_servlet extends HttpServlet {
    @Override
    public void doPost(HttpServletRequest req,HttpServletResponse res){
        
        Cookie cookie[] = req.getCookies();
        int fromId = Integer.parseInt(cookie[1].getValue());
        String[] toId = req.getParameter("toId").split(",");
        String sub = req.getParameter("sub");
        String msg = req.getParameter("msg");
        Thread push = new Thread(new DatabaseConnectorAPI.setMailArguments(fromId,toId,sub,msg));
        push.start();
    }
}
