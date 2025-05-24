const proyectos = [
  {
    titulo: "Admin Helper",
    descripcion:
      "Designed and created a web application to streamline end-of-day cash register closings and facilitate access to accounting information.",
    enlace: "https://github.com/tuusuario/ejemplo1",
  },
  {
    titulo: "Member of the Tecverse Development Team",
    descripcion: "Worked along classmates and professors on the development of a virtual campus. The campus blueprints were used to create 3D models of the buildings and thus create the Tecverse.",
    enlace: "https://github.com/tuusuario/ejemplo2",
  },
  {
    titulo: "U.C.A.G. System",
    descripcion: "Designed and developed a responsive web application with a registration system to facilitate the work of the Association, using React, Redux, Firebase, Bootstrap.",
    enlace: "https://github.com/tuusuario/ejemplo3",
  },
  {
    titulo: "QA Process",
    descripcion: "Developed a quality assurance process for a client of Encora. For this, Angular, Cypress, and MochaJS were used.",
    enlace: "https://github.com/tuusuario/ejemplo3",
  },
  {
    titulo: "Personal Portfolio",
    descripcion: "Developed a personal portfolio to showcase my projects and skills. The portfolio was created using HTML, CSS, and JavaScript.",
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
