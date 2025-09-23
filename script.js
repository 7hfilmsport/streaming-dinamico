// script.js
document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const clientId = params.get("id");

  if (!clientId) {
    document.getElementById("client-name").textContent = "Cliente no encontrado";
    return;
  }

  try {
    const response = await fetch("clientes.json");
    const clientes = await response.json();

    const cliente = clientes.find(c => c.id === clientId);

    if (!cliente) {
      document.getElementById("client-name").textContent = "Cliente no encontrado";
      return;
    }

    // Actualizar datos dinámicos
    document.title = `${cliente.nombre} - 7H Film Sport`;
    document.getElementById("client-name").textContent = cliente.nombre;
    document.getElementById("ultimo-evento").src = cliente.ultimo_evento;
    document.getElementById("playlist").src = cliente.playlist;

  } catch (error) {
    console.error("Error cargando clientes.json:", error);
  }
});
