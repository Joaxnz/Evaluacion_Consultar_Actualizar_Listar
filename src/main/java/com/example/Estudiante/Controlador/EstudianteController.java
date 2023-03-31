package com.example.Estudiante.Controlador;

import com.example.Estudiante.Entidad.Estudiante;
import com.example.Estudiante.Servicio.ServicioEstudiante;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class EstudianteController {

    ServicioEstudiante servicio = new ServicioEstudiante();

    @GetMapping("/listarEstudiante")
    public ArrayList<Estudiante> listarEstudiante() {
        return servicio.MostrarLista();
    }

    @PostMapping("/AgregarEstudiante")
    public String agregarEstudiante(@RequestBody Estudiante est) {
        return servicio.agregarEstudiante(est);
    }


    @GetMapping("/buscarEstudiante/{id}")
    public Estudiante buscarEstudiante(@PathVariable int id) {
        return servicio.buscarEstudiante(id);
    }

    @PutMapping("/ActualizarEstudiante/")
    public String ActualizarEstudiante(@RequestBody Estudiante est){
        return servicio.ActualizarEstudiante(est);
    }

    @GetMapping("/BuscarEstudianteCurso/{curso}")
    public List<Estudiante> BuscarEstudianteCurso(@PathVariable String curso){
        List<Estudiante> EstudianteByCurso = new ArrayList<>();
        for (Estudiante estudiante : listarEstudiante()){
            if (estudiante.getCurso().equals(curso)){
                EstudianteByCurso.add(estudiante);
            }

        }
        return EstudianteByCurso;
    }
}
