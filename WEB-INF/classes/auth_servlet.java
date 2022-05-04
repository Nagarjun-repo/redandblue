import javax.servlet.RequestDispatcher;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import databaseconnectorapi.DatabaseConnectorAPI;

public class auth_servlet extends HttpServlet{
    @Override
    public void doPost(HttpServletRequest req, HttpServletResponse res){
        String uname = "email";
        String pass = "pwd";

        String email = req.getParameter(uname);
        String pwd = req.getParameter(pass);

        int userId = DatabaseConnectorAPI.validateSigninInfo(email, pwd);

        if(userId > 0){
            //redirect to userDashboard
            try{
                Cookie email_Cookie = new Cookie("email", email);
                Cookie uid_Cookie   = new Cookie("userId", userId+"");
                email_Cookie.setMaxAge(60*60);
                uid_Cookie.setMaxAge(60*60);
                /*
                 email is stored at index 0
                 user id is stored at index 1
                */
                res.addCookie(email_Cookie);
                res.addCookie(uid_Cookie);
                RequestDispatcher dispatch = req.getRequestDispatcher("/dashboard.jsp");
                dispatch.forward(req, res);
            }
            catch(Exception e){
                System.out.println(e);
            }
        }
        else{
            try{
                
                res.sendRedirect("invalidUser");
            }
            catch(Exception e){
                System.out.println(e);
            }
        }
    }
}