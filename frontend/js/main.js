// EVENTOS EN JAVASCRIPT (CLICK, CARGAR, KEY,)
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:8080/api/cliente")
    .then((response) => response.json())
    .then((data) => {
      const elemento = document.getElementById("table-clientes");
      elemento.innerHTML = ""; // Limpiar tabla

      // Recorremos todos los clientes/empleados
      for (let i = 0; i < data.length; i++) {
        const cliente = data[i];

        // Creamos una fila para cada cliente
        const fila = `
                    <tr>
                        <th scope="row">${cliente.id}</th>
                        <td>${cliente.nombre}</td>
                        <td>${cliente.apellido}</td>
                        <td>${cliente.dni}</td>
                        <td>${cliente.telefono}</td>
                        <td>${cliente.direccion}</td>
                        <td>
                        <!-- Botón Editar (Azul Outline) -->
                        <button class="btn btn-outline-primary btn-sm">
                            <i class="fa-solid fa-pen-to-square"></i> Editar
                        </button>

                        <!-- Botón Eliminar (Rojo Outline) -->
                        <button id="btnEliminar" data-idcliente = ${cliente.id} class="btn btn-outline-danger btn-sm">
                            <i class="fa-solid fa-trash-can"></i> Eliminar
                        </button></td>

                    </tr>
                `;

        // Agregamos la fila a la tabla
        elemento.innerHTML += fila;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});


//EVENTO DE CLICK EN JAVASCRIPT
//Creamos una variable que almacene el DOM de ese elemento del boton
document.addEventListener("click", function (e) {
  const btnDelete = e.target.closest("#btnEliminar");
  if (btnDelete) { //TRUE o 1
    alert("Eliminando...");
   const id = btnDelete.dataset.idcliente;
    fetch(`http://localhost:8080/api/cliente/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
          alert('Cliente eliminado correctamente');
          location.reload(); // Recargar la página para reflejar los cambios
        } else {
          alert('Error al eliminar el cliente');
     }})
  }
});

//
function guardarCliente() {
  const cliente = {
    nombre: document.getElementById("c_nombre").value,
    apellido: document.getElementById("c_apellido").value,
    dni: document.getElementById("c_dni").value,
    telefono: document.getElementById("c_telefono").value,
    direccion: document.getElementById("c_direccion").value
  };
  fetch("http://localhost:8080/api/cliente/registrar", {  
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente)
  })
  .then(response => {
    if (response.ok) {
      alert("Cliente registrado");
      location.reload();
    } else {
      alert("Error: " + response.status);
    }
  })
  .catch(error => console.error("Error:", error));
}

document.getElementById("btncrearCliente").onclick = guardarCliente;