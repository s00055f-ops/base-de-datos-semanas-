// Datos de las semanas (ahora soporta múltiples links)
const semanas = {
  1: { 
    desc: "Trabajo de la semana 1: Diagramas E/R", 
    links: [
      { url: "https://www.canva.com/design/DAGzMAgwKcs/cDgWGMPUGi-ReOzBb-1Q4g/edit", texto: "Informe Técnico Comparativo" },
       { url: "https://docs.google.com/document/d/1iA9bNV7w68wZU6t-g1Qa_psu4yUDOXWVNM9rRp6vuK4/edit?usp=sharing", texto: "Manual: Creación de una cuenta en GitHub" },
    ] 
  },
  2: { 
    desc: "MANUAL DE INSTALACIÓN DE SQL SERVER", 
    links: [
      { url: "https://docs.google.com/document/d/1-s3chNFEed1sG2SHfxuUaQUiHRUp-loLfKhLpgHzv9E/edit?usp=sharing", texto: "📄 Manual De Instalacion de SQL Server" },
      { url: "https://docs.google.com/document/d/1IGBml0DSXOFgcUwRv6TUprx-FAC5YSo6GTD-s8_zwzg/edit?usp=sharing", texto: "📘 EJEMPLO 1" }
    ] 
  },
  3: { desc: "Trabajo de la semana 3: Proximamente", links: [
      { url: "https://mi-trabajo-semana3.com", texto: "🔗 Trabajo" }
    ] 
  },
  4: { desc: "Trabajo de la semana 4: Proximamente", links: [
      { url: "https://mi-trabajo-semana4.com", texto: "🔗 Trabajo" }
    ] 
  },
  5: { desc: "Trabajo de la semana 5: Vistas y Proximamente", links: [
      { url: "https://mi-trabajo-semana5.com", texto: "🔗 Trabajo" }
    ] 
  },
  6: { desc: "Trabajo de la semana 6: Proximamente", links: [
      { url: "https://mi-trabajo-semana6.com", texto: "🔗 Trabajo" }
    ] 
  },
  7: { desc: "Trabajo de la semana 7: Proximamente", links: [
      { url: "https://mi-trabajo-semana7.com", texto: "🔗 Trabajo" }
    ] 
  },
  8: { desc: "Trabajo de la semana 8:Proximamente", links: [
      { url: "https://mi-trabajo-semana8.com", texto: "🔗 Trabajo" }
    ] 
  },
  9: { desc: "Trabajo de la semana 9: Proximamente", links: [
      { url: "https://mi-trabajo-semana9.com", texto: "🔗 Trabajo" }
    ] 
  },
  10: { desc: "Trabajo de la semana 10: Proximamente", links: [
      { url: "https://mi-trabajo-semana10.com", texto: "🔗 Trabajo" }
    ] 
  },
  11: { desc: "Trabajo de la semana 11: Proximamente", links: [
      { url: "https://mi-trabajo-semana11.com", texto: "🔗 Trabajo" }
    ] 
  },
  12: { desc: "Trabajo de la semana 12: Proximamente", links: [
      { url: "https://mi-trabajo-semana12.com", texto: "🔗 Trabajo" }
    ] 
  },
  13: { desc: "Trabajo de la semana 13: Proximamente", links: [
      { url: "https://mi-trabajo-semana13.com", texto: "🔗 Trabajo" }
    ] 
  },
  14: { desc: "Trabajo de la semana 14: Proximamente", links: [
      { url: "https://mi-trabajo-semana14.com", texto: "🔗 Trabajo" }
    ] 
  },
  15: { desc: "Trabajo de la semana 15: Proximamente", links: [
      { url: "https://mi-trabajo-semana15.com", texto: "🔗 Trabajo" }
    ] 
  },
  16: { desc: "Trabajo final: Proximamente", links: [
      { url: "https://mi-trabajo-semana16.com", texto: "🔗 Proyecto final" }
    ] 
  }
};

// Mostrar modal
function mostrarModal(nombre) {
  document.getElementById("modal-" + nombre).style.display = "flex";
}

// Cerrar modal
function cerrarModal(nombre) {
  document.getElementById("modal-" + nombre).style.display = "none";
}

// Abrir info de una semana (soporta varios links)
function abrirSemana(num) {
  const semana = semanas[num];
  document.getElementById("titulo-semana").innerText = "Semana " + num;
  document.getElementById("descripcion-semana").innerText = semana.desc;

  const contenedor = document.getElementById("links-semana");
  contenedor.innerHTML = "";

  semana.links.forEach(l => {
    const a = document.createElement("a");
    a.href = l.url;
    a.target = "_blank";
    a.className = "btn";
    a.innerText = l.texto;
    contenedor.appendChild(a);
  });

  mostrarModal("semana-info");
}

// Login básico
function login() {
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;
  if (usuario === "admin" && contrasena === "1234") {
    document.getElementById("admin-msg").innerText = "Modo administrador activo ✅";
  } else {
    document.getElementById("admin-msg").innerText = "Credenciales incorrectas ❌";
  }
}
