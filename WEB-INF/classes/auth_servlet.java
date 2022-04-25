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
        }
        else{
            try{
                res.sendRedirect("invalidUser.html");
            }
            catch(Exception e){
                System.out.println(e);
            }
        }
    }
}
