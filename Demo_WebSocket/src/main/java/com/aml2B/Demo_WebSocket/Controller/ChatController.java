package com.aml2B.Demo_WebSocket.Controller;
//import org.springframework.messaging.handler.annotation.*;
//import org.springframework.stereotype.Controller;
//
//@Controller
//public class ChatController {
//
//    @MessageMapping("/chat")          // client sends here
//    @SendTo("/topic/messages")        // broadcast to all
//    public Message sendMessage(Message message) {
//        System.out.println(message.getSender()+" : "+ message.getContent());
//        return message;
//    }
//}
import org.springframework.messaging.handler.annotation.*;
import org.springframework.stereotype.Controller;

import com.aml2B.Demo_WebSocket.Model.Message;

@Controller
public class ChatController {

    /** ANSI red + reset (visible in Windows Terminal, VS Code, most modern consoles). */
    private static final String RED = "\u001B[31m";
    private static final String RESET = "\u001B[0m";

    @MessageMapping("/chat")          // client sends here
    @SendTo("/topic/messages")        // broadcast to all
    public Message sendMessage(Message message) {
        System.out.println(RED + "[chat] " + message.getSender() + ": " + message.getContent() + RESET);
        return message;
    }
}