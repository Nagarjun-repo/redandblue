import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;
import javax.servlet.http.Cookie;
import databaseconnectorapi.DatabaseConnectorAPI;
import org.json.JSONArray;

public class get_outbox_mail_servlet extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse res){
        
        try{
            Cookie[] ck = req.getCookies(); 
            int userId=0;
            for(Cookie cookie:ck){
                 if(cookie.getName().equals("userId")){
                    userId = Integer.parseInt(cookie.getValue());
                 }
            }
            JSONArray mail_list =  DatabaseConnectorAPI.getOutboxMsg(userId);
            res.setContentType("application/json");
            res.setCharacterEncoding("utf8");
            PrintWriter write = res.getWriter();
            write.print(mail_list);
        }
        catch(Exception e){
            System.out.println(e);
        }
    }
}