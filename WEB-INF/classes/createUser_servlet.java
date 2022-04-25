import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import databaseconnectorapi.search_db;
import databaseconnectorapi.DatabaseConnectorAPI.insertSignupTimeData;

public class createUser_servlet extends HttpServlet{
    @Override
    public void doPost(HttpServletRequest req ,HttpServletResponse res){
        String firName = "fname";
        String lastName = "lname";
        String mobile = "mobno";
        String uname = "uname";
        String pass = "pwd";

        String fname = req.getParameter(firName);
        String lname = req.getParameter(lastName);
        Long mobNo = Long.parseLong(req.getParameter(mobile));
        String emailId = req.getParameter(uname);
        String pwd = req.getParameter(pass);

        int existsId = search_db.search_db(emailId);

        if(existsId == 0){
            try{
                Runnable thread_insertSignUpData = new insertSignupTimeData(fname, lname,mobNo,emailId, pwd);
                new Thread(thread_insertSignUpData).start();
                res.sendRedirect("index.html");
            }
            catch(Exception e){
                System.out.println(e);
            }
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