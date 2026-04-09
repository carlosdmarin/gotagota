package com.senati.gotogota.repository;


//IMPORTAMOS LSO DIRVERS, METODOS
import com.senati.gotogota.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//@Repository Es una ANOTACION COMO LA CAPA DE ACCESO A LA BASE DE DATOS
@Repository
public interface ClienteRepository  extends JpaRepository<Cliente, Long> {

}
