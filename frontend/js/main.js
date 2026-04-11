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
                        <button class="btn btn-outline-danger btn-sm">
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
