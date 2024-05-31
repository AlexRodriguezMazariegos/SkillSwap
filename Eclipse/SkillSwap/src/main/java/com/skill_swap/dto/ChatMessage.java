package com.skill_swap.dto;

public class ChatMessage {

    private String user;
    private String message;
    private Long chatId;
    private Long userId;
    private Long targetUserId; //CAMPO PARA CREAR CHAT CON OTRO USUARIO

    public ChatMessage() {
    }

    public ChatMessage(String user, String message, Long chatId, Long userId) {
        this.user = user;
        this.message = message;
        this.chatId = chatId;
        this.userId = userId;
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

	public Long getTargetUserId() {
		return targetUserId;
	}

	public void setTargetUserId(Long targetUserId) {
		this.targetUserId = targetUserId;
	}


}
