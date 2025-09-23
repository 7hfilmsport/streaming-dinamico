// Obtener parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);
const clientId = urlParams.get("id");

if (clientId) {
  fetch("clientes.json")
    .then(response => response.json())
    .then(data => {
      const client = data[clientId];
      if (client) {
        document.getElementById("client-name").textContent = client.name;

        document.getElementById("client-content").innerHTML = `
          <p>${client.description}</p>
          <iframe src="${client.playlist}" allowfullscreen></iframe>
        `;
      } else {
        document.getElementById("client-content").innerHTML = `<p>Cliente no encontrado.</p>`;
      }
    })
    .catch(error => {
      console.error("Error cargando clientes.json", error);
      document.getElementById("client-content").innerHTML = `<p>Error al cargar los datos.</p>`;
    });
}
