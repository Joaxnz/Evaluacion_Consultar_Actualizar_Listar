package com.example.Estudiante.Servicio;

import com.example.Estudiante.Entidad.Estudiante;

import java.util.ArrayList;

public class ServicioEstudiante {

    private ArrayList<Estudiante> lista = new ArrayList<>();

    public ServicioEstudiante(){
        lista.add(new Estudiante(1,"Erick","Cantor","1104", new String[]{"Matematicas ","Quimica ","Sociales "},new int[]{5,3,1},"Aprobado"));
        lista.add(new Estudiante(2,"Liz","Carrero","1104", new String[]{"Sociales","ed fisica","Biologia"},new int[]{4,3,1},"Reprobado"));
        lista.add(new Estudiante(3,"Omar","Diaz","1104", new String[]{"Aljebra","Quimica","Sistemas"},new int[]{5,5,3},"Aprobado"));
        lista.add(new Estudiante(4,"Brayan","Quiroga","1102", new String[]{"Matematicas","Quimica","Sociales"},new int[]{1,2,5},"Reprobado"));
        lista.add(new Estudiante(5,"Ana","Cantor","1102", new String[]{"Matematicas","Quimica","Sociales"},new int[]{5,3,3},"Aprobado"));
        lista.add(new Estudiante(6,"Santiago","Bonilla","1102", new String[]{"Matematicas","Quimica","Sociales"},new int[]{5,1,1},"Reprobado"));
        lista.add(new Estudiante(7,"Juan","Ortiz","1101", new String[]{"Matematicas","Quimica","Sociales"},new int[]{1,5,5},"Aprobado"));
        lista.add(new Estudiante(8,"Harold","Briñez","1102", new String[]{"Matematicas","Quimica","Sociales"},new int[]{5,1,2},"Reprobado"));
        lista.add(new Estudiante(9,"Miguel","Alzate","1104", new String[]{"Matematicas","Quimica","Sociales"},new int[]{4,3,3},"Aprobado"));
        lista.add(new Estudiante(10,"Juliana","Brighit","1101", new String[]{"Matematicas","Quimica","Sociales"},new int[]{1,5,1},"Reprobado"));
        lista.add(new Estudiante(11,"Joan","Leon","1101", new String[]{"Matematicas","Quimica","Sociales"},new int[]{5,3,5},"Aprobado"));
    }

    public ArrayList<Estudiante> MostrarLista() {
        return lista;
    }

    public String agregarEstudiante(Estudiante datos){
        lista.add(datos);
        return "Estudiante registrado con exito";
    }

    public Estudiante buscarEstudiante(int id){

        for (Estudiante u:lista){
            if (u.getCodigo()==id){
                return u;
            }
        }
        return null;
    }

    public Estudiante eliminarEstudiante(int id){
        for(Estudiante e: lista){
            if (e.getCodigo() == id){
                lista.remove(e);
            }
        }
        return null;
    }

    public String ActualizarEstudiante(Estudiante estudiante){
        for (Estudiante o: lista){
            if (o.getCodigo() == estudiante.getCodigo()){
                o.setNombre(estudiante.getNombre());
                o.setApellidos(estudiante.getApellidos());
                o.setCurso(estudiante.getCurso());
                o.setMaterias(estudiante.getMaterias());
                o.setNotas(estudiante.getNotas());
                o.setJuicio(estudiante.getJuicio());
            }
        }
        return "Se actualizo con exito";
    }

}
