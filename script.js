const proyectos = [
  {
    titulo: "Admin Helper",
    descripcion:
      "Designed and created a web application to streamline end-of-day cash register closings and facilitate access to accounting information.",
    info: [
      "Closing the register became fully digitalized",
      "Information is organized in one place for two different facilities",
      "Time spent after closing for employees reduced from +20 minutes to <12",
      "Less margin for error in cash register closings",
    ],
    imagen: "/assets/adminHelper.png",
  },
  {
    titulo: "Member of the Tecverse Development Team",
    descripcion:
      "Worked along classmates and professors on the development of a virtual campus. The campus blueprints were used to create 3D models of the buildings, using SketchUp Pro, and thus create the Tecverse.",
    info: [
      "Researched technologies for 3D prototyping",
      "Created basic designs to become familiar with modeling tools",
      "Developed 3D models of the campus buildings based on architectural blueprints",
    ],
    imagen: "/assets/tecverse.png",
  },
  {
    titulo: "U.C.A.G. System",
    descripcion:
      "Designed and developed a responsive web application with a registration system to facilitate the work of the Association, using React, Redux, Firebase, Bootstrap.",
    info: [
      "Focused on the design and implementation of dynamic data tables",
      "Implemented sorting, filtering, and pagination to improve data navigation",
      "Ensured tables were responsive and user-friendly across different devices",
    ],
    imagen: "/assets/ucag.png",
  },
  {
    titulo: "QA Process",
    descripcion:
      "Developed a quality assurance process for a client of Encora. For this, Angular, Cypress, and MochaJS were used.",
    info: [
      "Performed a series of black-box and functional tests",
      "Identified a bug that caused two components to swap positions unexpectedly",
      "Helped ensure UI consistency and functional accuracy across the application",
    ],
    imagen: "/assets/qa.png",
  },
  {
    titulo: "Personal Portfolio",
    descripcion:
      "Developed a personal portfolio to showcase my projects and skills. The portfolio was created using HTML, CSS, and JavaScript.",
    imagen: "/assets/portfolio.png",
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
         ${
           proyecto.info
             ? `<ul>${proyecto.info.map((b) => `<li>${b}</li>`).join("")}</ul>`
             : ""
         }
        ${
          proyecto.enlace
            ? `<a href="${proyecto.enlace}" target="_blank">Ver en GitHub</a>`
            : ""
        }
      </div>
      <div class="proyecto-img">
        <img src="${proyecto.imagen}" alt="${proyecto.titulo}" />
      </div>
    </div>
  `;
  contenedor.appendChild(div);
});

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".slide-title").forEach((title, idx) => {
    setTimeout(() => title.classList.add("visible"), 100 + idx * 150);
  });

  // Animate sections with stagger
  document.querySelectorAll(".slide-section").forEach((section, idx) => {
    setTimeout(() => section.classList.add("visible"), 300 + idx * 200);
  });
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
