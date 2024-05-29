package com.skill_swap.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ChatMessage {
    private String user;
    private String message;
    private Long chatId;
    private Long userId;

    public ChatMessage(String sender, String content, Long timestamp, Long chatId) {
        this.message = sender;
        this.message = content;
        this.chatId = timestamp;
        this.chatId = chatId;

    }
}
