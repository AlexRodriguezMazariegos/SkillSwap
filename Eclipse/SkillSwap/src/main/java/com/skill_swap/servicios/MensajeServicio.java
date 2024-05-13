package com.skill_swap.servicios;

import com.skill_swap.entidades.Mensaje;
import com.skill_swap.repositorios.MensajeRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MensajeServicio {

    private final MensajeRepositorio mensajeRepositorio;

    @Autowired
    public MensajeServicio(MensajeRepositorio mensajeRepositorio) {
        this.mensajeRepositorio = mensajeRepositorio;
    }

    public List<Mensaje> obtenerTodosLosMensajes() {
        return mensajeRepositorio.findAll();
    }

    public Mensaje obtenerMensajePorId(Long id) {
        Optional<Mensaje> mensajeOptional = mensajeRepositorio.findById(id);
        if (mensajeOptional.isPresent()) {
            return mensajeOptional.get();
        } else {
            throw new IllegalArgumentException("Mensaje no encontrado con ID: " + id);
        }
    }

    public Mensaje crearOActualizarMensaje(Mensaje mensaje) {
        return mensajeRepositorio.save(mensaje);
    }

    public void borrarMensaje(Long id) {
        mensajeRepositorio.deleteById(id);
    }
}
