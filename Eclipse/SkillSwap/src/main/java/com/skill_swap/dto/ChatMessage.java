package com.skill_swap.dto;

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

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Long getChatId() {
		return chatId;
	}

	public void setChatId(Long chatId) {
		this.chatId = chatId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}
}
