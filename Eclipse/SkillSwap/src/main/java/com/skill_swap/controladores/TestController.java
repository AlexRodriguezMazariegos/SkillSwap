package com.skill_swap.controladores;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/test")
public class TestController {

    @GetMapping("/websocket")
    public String testWebSocketConnection() {
        return "WebSocket server is running!";
    }
}
