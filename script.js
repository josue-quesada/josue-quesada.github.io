const proyectos = [
  {
    titulo: "Admin Helper",
    descripcion:
      "Designed and created a web application to streamline end-of-day cash register closings and facilitate access to accounting information.",
    imagen: "/assets/adminHelper.png",
  },
  {
    titulo: "Member of the Tecverse Development Team",
    descripcion:
      "Worked along classmates and professors on the development of a virtual campus. The campus blueprints were used to create 3D models of the buildings, using SketchUp Pro, and thus create the Tecverse.",
    imagen: "/assets/tecverse.png",
  },
  {
    titulo: "U.C.A.G. System",
    descripcion:
      "Designed and developed a responsive web application with a registration system to facilitate the work of the Association, using React, Redux, Firebase, Bootstrap.",
    imagen: "/assets/ucag.png",
  },
  {
    titulo: "QA Process",
    descripcion:
      "Developed a quality assurance process for a client of Encora. For this, Angular, Cypress, and MochaJS were used.",
    imagen: "/assets/qa.png",
  },
  {
    titulo: "Personal Portfolio",
    descripcion:
      "Developed a personal portfolio to showcase my projects and skills. The portfolio was created using HTML, CSS, and JavaScript.",
    enlace: "https://github.com/tuusuario/ejemplo3",
  },
];

const contenedor = document.getElementById("lista-proyectos");

proyectos.forEach((proyecto, idx) => {
  const div = document.createElement("div");
  div.className = "proyecto";
  div.innerHTML = `
    <div class="proyecto-content">
      <div class="proyecto-text">
        <h3>${proyecto.titulo}</h3>
        <p>${proyecto.descripcion}</p>
        ${proyecto.enlace ? `<a href="${proyecto.enlace}" target="_blank">Ver en GitHub</a>` : ""}
      </div>
      <div class="proyecto-img">
        <img src="${proyecto.imagen}" alt="${proyecto.titulo}" />
      </div>
    </div>
  `;
  contenedor.appendChild(div);

  // Add slide-in effect with staggered delay
  setTimeout(() => {
    div.classList.add("visible");
  }, 200 * idx);
});

const modal = document.getElementById("img-modal");
const modalImg = document.getElementById("img-modal-img");
const modalClose = document.querySelector(".img-modal-close");

document.querySelectorAll(".proyecto-img img").forEach((img) => {
  img.style.cursor = "pointer";
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
  });
});

modalClose.onclick = function () {
  modal.style.display = "none";
};

modal.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
