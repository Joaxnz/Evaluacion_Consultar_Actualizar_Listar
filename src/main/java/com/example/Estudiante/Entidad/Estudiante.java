package com.example.Estudiante.Entidad;

import java.util.Map;

public class Estudiante {
    private int codigo;
    private String nombre;
    private String apellidos;
    private String curso;
    private String[] materias = new String[3];
    private int[] notas = new int[3];
    private String juicio;
    private double promedio_definitiva;

    public Estudiante(int codigo, String nombre, String apellidos, String curso, String[] materias, int[] notas, String juicio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.curso = curso;
        this.materias = materias;
        this.notas = notas;
        this.juicio = juicio;
    }

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public String[] getMaterias() {
        return materias;
    }

    public void setMaterias(String[] materias) {
        this.materias = materias;
    }

    public int[] getNotas() {
        return notas;
    }

    public void setNotas(int[] notas) {
        this.notas = notas;
    }

    public String getJuicio() {
        return juicio;
    }

    public void setJuicio(String juicio) {
        this.juicio = juicio;
    }
}

