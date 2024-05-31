package com.skill_swap.controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

import com.skill_swap.entidades.Chat;
import com.skill_swap.servicios.ChatServicio;

@RestController
@RequestMapping("/api/v1/chat")
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class ChatControlador {

	@Autowired
	private ChatServicio chatServicio;

	@GetMapping("")
	public List<Chat> obtenerTodosLosChats() {
		return chatServicio.obtenerTodosLosChats();
	}

	// Endpoint para obtener un chat por su ID
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Chat>> obtenerChatPorId(@PathVariable Long id) {
		if (chatServicio.obtenerChatPorId(id).isPresent()) {
			return ResponseEntity.status(HttpStatus.OK).body(chatServicio.obtenerChatPorId(id));
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

		}
	}

	// Endpoint para crear un nuevo chat
	@PostMapping("/crear")
	public ResponseEntity<Chat> crearChat(@RequestBody Chat chat) {
		return ResponseEntity.status(HttpStatus.CREATED).body(chatServicio.crearChat(chat));
	}

	// Endpoint para actualizar un chat existente
	@PutMapping("/{id}")
	public ResponseEntity<Chat> actualizarChat(@PathVariable Long id, @RequestBody Chat chat) {
		if (chatServicio.obtenerChatPorId(id).isPresent()) {
			return ResponseEntity.status(HttpStatus.OK).body(chatServicio.actualizarChat(id, chat));
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

	// Endpoint para borrar un chat por su ID
	@DeleteMapping("/{id}")
	public ResponseEntity<Chat> borrarChat(@PathVariable Long id) {
		if (chatServicio.obtenerChatPorId(id).isPresent()) {
			chatServicio.borrarChat(id);
			return ResponseEntity.status(HttpStatus.OK).build();
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
}
