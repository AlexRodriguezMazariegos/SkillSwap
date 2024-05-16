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
	private ChatRepositorio chatRepositorio;

	// Método para obtener todos los Chats
	public List<Chat> obtenerTodosLosChats() {
		return chatRepositorio.findAll();
	}

	public Optional<Chat> obtenerChatPorId(Long id) {
		return chatRepositorio.findById(id);
	}

	// Método para crear o actualizar un Chat
	public Chat crearChat(Chat chat) {
		return chatRepositorio.save(chat);
	}

	// Método para crear o actualizar un Chat
	public Chat actualizarChat(Long id, Chat chat) {
		if (chatRepositorio.findById(id).isPresent()) {
			Chat ChatAModificar = chatRepositorio.findById(id).get();
			// El id se queda como estaba
			ChatAModificar.setId(id);
			ChatAModificar.setUsuario1(chat.getUsuario1());
			ChatAModificar.setUsuario2(chat.getUsuario2());
			return chatRepositorio.save(ChatAModificar);
		} else {
			return null;
		}
	}

	// Método para borrar un usuario por su ID
	public Boolean borrarChat(Long id) {
		{
			try {
				chatRepositorio.deleteById(id);
				return true;
			} catch (Exception e) {
				return false;
			}
		}
	}
}