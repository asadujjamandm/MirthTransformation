package mirthSocket;

import java.io.*;
import java.net.*;

public class TcpDestination {    
    public String host;
    public int port;     

    public TcpDestination(String _host, int _port) throws Exception{
        this.host = _host;
        this.port = _port;        
    }

    public String SendToServer(String msg) {    

        try{            
            String msgState = msg;
            msg = msg.replaceAll("\\{\n", "{\r\n")
            .replaceAll("\\,\n", ",\r\n")
            .replaceAll("\\[\n" , "[\r\n")
            .replaceAll("\\\n}", "\r\n}")
            .replaceAll("\\\n]", "\r\n]")
            .replaceAll("\"", "\\\"");

            msgState = msg;

            var socket = new Socket(this.host, this.port);

            PrintWriter outToServer = new PrintWriter(new OutputStreamWriter(socket.getOutputStream()));    

            outToServer.write(msg);
            outToServer.flush();
            System.out.print("msg sent to server");

            socket.close();

            return msgState;            
        }
        catch(Exception ex){
            return ex.getMessage();
        }        
    }              
    
}
