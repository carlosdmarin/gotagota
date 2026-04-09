package com.senati.gotogota.entity;


import jakarta.persistence.*;

//Le dice a hibernate que esta es una clase representa una tabla en la DB
@Entity
//@Table indidca el nombre exacto de tabla en MYSQL o MariaDB
@Table(name = "cliente")
public class Cliente {

    //@Id marca este campo la clave de la tabla primaria
    //@GeneratedValue  hace el ID se genere automaticamente (auto_increment)
    //@Column(name="cliente_id") indica el nombre exacto de la columna en mysql
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column (name = "cliente_id")
    private Long id;

    //nullable = false significa que este campo no puede estar vacio en la DB
    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private String apellido;

    //unique=true significa que no puede haber dos clientes con el mismo DNI
    //length=8 significa, limita el campo a 8 caracteres
    @Column( nullable = false,unique = true,length = 8)
    private String dni;

    //Sin anotaciones (@) extra: columna normal, puede ser nula
    private String telefono;

    private String direccion;

    //GETTERS y SETTERS

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
}
