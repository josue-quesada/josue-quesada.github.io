const proyectos = [
  {
    titulo: "Ejemplo 1",
    descripcion: "Descripción del proyecto de ejemplo 1.",
    enlace: "https://github.com/tuusuario/ejemplo1",
  },
  {
    titulo: "Ejemplo 2",
    descripcion: "Descripción del proyecto de ejemplo 2.",
    enlace: "https://github.com/tuusuario/ejemplo2",
  },
  {
    titulo: "Ejemplo 3",
    descripcion: "Descripción del proyecto de ejemplo 3.",
    enlace: "https://github.com/tuusuario/ejemplo3",
  },
];

const contenedor = document.getElementById("lista-proyectos");

proyectos.forEach((proyecto) => {
  const div = document.createElement("div");
  div.className = "proyecto";
  div.innerHTML = `
    <h3>${proyecto.titulo}</h3>
    <p>${proyecto.descripcion}</p>
    <a href="${proyecto.enlace}" target="_blank">Ver en GitHub</a>
  `;
  contenedor.appendChild(div);
});
