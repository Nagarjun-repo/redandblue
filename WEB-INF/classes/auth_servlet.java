import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import databaseConnectorAPI.DatabaseConnectorAPI;

public class auth_servlet extends HttpServlet{
    @Override
    public void doPost(HttpServletRequest req, HttpServletResponse res){
        String uname = "email";
        String passkey = "pwd";
        String email = req.getParameter(uname);
        String pwd  = req.getParameter(passkey);
        
        int userId = DatabaseConnectorAPI.validateSigninInfo(email,pwd);

        if (userId>0){

        }   
        else{
            //redirect to index.html
        } 
    }
}
