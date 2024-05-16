package com.skill_swap.servicios;

import com.skill_swap.entidades.Mensaje;
import com.skill_swap.repositorios.MensajeRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MensajeServicio {

	@Autowired
	private MensajeRepositorio mensajeRepositorio;

	// Método para obtener todos los mensajes
	public List<Mensaje> obtenerTodosLosMensajes() {
		return mensajeRepositorio.findAll();
	}

	public Optional<Mensaje> obtenerMensajePorId(Long id) {
		return mensajeRepositorio.findById(id);
	}

	// Método para crear o actualizar un mensaje
	public Mensaje crearMensaje(Mensaje mensaje) {
		return mensajeRepositorio.save(mensaje);
	}

	// Método para crear o actualizar un mensaje
	public Mensaje actualizarMensaje(Long id, Mensaje mensaje) {
		if (mensajeRepositorio.findById(id).isPresent()) {
			Mensaje mensajeAModificar = mensajeRepositorio.findById(id).get();
			// El id se queda como estaba
			mensajeAModificar.setId(id);
			// Solo se podra modificar la fecha del mensaje y su texto, los demas campos
			// permanecen
			mensajeAModificar.setFecha(mensaje.getFecha());
			mensajeAModificar.setTexto(mensaje.getTexto());

			return mensajeRepositorio.save(mensajeAModificar);
		} else {
			return null;
		}
	}

	// Método para borrar un usuario por su ID
	public Boolean borrarMensaje(Long id) {
		{
			try {
				mensajeRepositorio.deleteById(id);
				return true;
			} catch (Exception e) {
				return false;
			}
		}
	}
}
