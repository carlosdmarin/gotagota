package com.senati.gotogota.service;
//Importamos la anotacion @Service
//Esto es la capa de la logica de negocio, aqui van las validaciones, calculos, etc..

import com.senati.gotogota.entity.Cliente;
import com.senati.gotogota.repository.ClienteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    //Inyectamos el repositorio para acceder a la base de datos
    private final ClienteRepository clienteRepository;

    //Construcctor: Spring inyecta automaticamente el repositorio
    public ClienteService(ClienteRepository clienteRepository){
        this.clienteRepository  = clienteRepository;
    }

    //Retorna o recibe la lista de todos los clientes
    public List<Cliente> listarTodos(){
        return clienteRepository.findAll();
    }
}
