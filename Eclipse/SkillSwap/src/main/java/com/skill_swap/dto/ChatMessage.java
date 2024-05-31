package com.skill_swap.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatMessage {
    private String user;
    private String message;
    private Long chatId;
    private Long userId;
    private Long targetUserId; // Añadido para identificar el usuario con el que se está chateando

    public ChatMessage(String user, String message, Long chatId, Long userId, Long targetUserId) {
        this.user = user;
        this.message = message;
        this.chatId = chatId;
        this.userId = userId;
        this.targetUserId = targetUserId;
    }
}
