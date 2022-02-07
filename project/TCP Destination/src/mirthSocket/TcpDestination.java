package mirthSocket;

import java.io.*;
import java.net.*;
import java.nio.file.Files;
import java.nio.file.Path;

public class TcpDestination {    
    public String host;
    public int port;     

    public TcpDestination(String _host, int _port) throws Exception{
        this.host = _host;
        this.port = _port;        
    }

    public String ReadDataFromFile(){
        try{
            Path fileName = Path.of("D:\\TCP Destination\\log.txt");

            String data = Files.readString(fileName);
            return data;
        }
        catch(Exception ex){
            return ex.getMessage();
        }
    }

    public String SendToServer(String msg) {    
        try{            
            String msgState = msg;
            // msg = msg.replaceAll("\\{\n", "{\r\n")             
            // .replaceAll("\\[\n" , "[\r\n")
            // .replaceAll("\\}\n" , "}\r\n")            
            // .replaceAll("\\]\n" , "]\r\n")
            // .replaceAll("\\,\n" , ",\r\n")
            // .replaceAll("\""    , "\\\"") + "\r\n";

            //msg = "\r\n" + msg.replaceAll("\\\n", "\r\n") + "\r\n";
            msg = msg.replaceAll("\\\n", "\r\n");

            msgState = msg;

            var socket = new Socket(this.host, this.port);

            PrintWriter outToServer = new PrintWriter(new OutputStreamWriter(socket.getOutputStream()));    

            outToServer.write(msg);
            outToServer.flush();
            System.out.print("msg sent to server");

            socket.close();

            //File fileObj = new File("C:\\Program Files\\Mirth Connect\\custom-lib\\log.txt");

            // FileWriter myWriter = new FileWriter("C:\\Program Files\\Mirth Connect\\custom-lib\\log.txt");
            // myWriter.write(msgState);
            // myWriter.close();

            return msgState;            
        }
        catch(Exception ex){
            return ex.getMessage();
        }        
    }              
    
}
