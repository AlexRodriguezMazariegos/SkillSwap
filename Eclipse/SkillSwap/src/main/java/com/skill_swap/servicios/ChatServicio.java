package com.skill_swap.servicios;

import com.skill_swap.entidades.Chat;
import com.skill_swap.repositorios.ChatRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChatServicio {
    
	@Autowired
    private ChatRepositorio ChatRepositorio;

    // Método para obtener todos los Chats
    public List<Chat> obtenerTodosLosChats() {
        return ChatRepositorio.findAll();
    }

    public Optional<Chat> obtenerChatPorId(Long id) {
        return ChatRepositorio.findById(id);
    }

    // Método para crear o actualizar un Chat
    public Chat crearChat(Chat chat) {
        return ChatRepositorio.save(chat);
    }

    // Método para crear o actualizar un Chat
    public Chat actualizarChat(Long id, Chat chat) {
    	if(ChatRepositorio.findById(id).isPresent()) {
    		Chat ChatAModificar= ChatRepositorio.findById(id).get();
    		//El id se queda como estaba
    		ChatAModificar.setId(id);
    		ChatAModificar.setUsuario1(chat.getUsuario1());
    		ChatAModificar.setUsuario2(chat.getUsuario2());            
            return ChatRepositorio.save(ChatAModificar);
    	}else {
    		return null;
    	}
    }
    
    // Método para borrar un Chat por su ID
    public void borrarChat(Long id) {
        ChatRepositorio.deleteById(id);
    }
}
