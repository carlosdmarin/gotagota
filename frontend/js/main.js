fetch('http://localhost:8080/api/cliente')
  .then(res => res.json())
  .then(data => {
    // Mostrar los datos tal cual vienen del backend
    document.getElementById('tabla-cliente').innerHTML = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    document.getElementById('tabla-cliente').innerHTML = 'Error: ' + error.message;
  });