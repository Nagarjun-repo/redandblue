import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.PrintWriter;
import javax.servlet.http.Cookie;
import databaseconnectorapi.DatabaseConnectorAPI;

public class upload_profile_picture_servlet extends HttpServlet{

    @Override
    public void doPost(HttpServletRequest req,HttpServletResponse res){
        File picture = req.get("picture");
    }
    
}
