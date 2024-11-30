const carrito = document.querySelector("#carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const realizarCompraBtn = document.querySelector("#realizar-compra");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

document.addEventListener("DOMContentLoaded", cargarEventListeners);

function cargarEventListeners() {
  listaCursos.addEventListener("click", agregarCurso);
  carrito.addEventListener("click", eliminarCurso);
  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
  realizarCompraBtn.addEventListener("click", realizarCompra);
}

function agregarCurso(e) {
  e.preventDefault();

  if (e.target.classList.contains("agregar-carrito")) {
    const curso = e.target.parentElement.parentElement;
    leerDatosCurso(curso);
  }
}

function leerDatosCurso(curso) {
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".u-pull-right").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
      }
      return curso;
    });
    articulosCarrito = [...cursos];
  } else {
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  carritoHTML();
}

function carritoHTML() {
  limpiarHTML();

  articulosCarrito.forEach((curso) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td><img src="${curso.imagen}" width="100"></td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
        `;
    carrito.appendChild(row);
  });
}

function eliminarCurso(e) {
  e.preventDefault();

  if (e.target.classList.contains("borrar-curso")) {
    const cursoId = e.target.getAttribute("data-id");

    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId);

    carritoHTML();
  }
}

function vaciarCarrito() {
  articulosCarrito = [];
  limpiarHTML();
}

function limpiarHTML() {
  while (carrito.firstChild) {
    carrito.removeChild(carrito.firstChild);
  }
}

function realizarCompra(e) {
  e.preventDefault();

  if (articulosCarrito.length === 0) {
    alert(
      "El carrito está vacío. Agrega productos antes de realizar la compra."
    );
    return;
  }

  const mensaje = document.createElement("p");
  mensaje.textContent = "¡Compra realizada con éxito!";
  mensaje.style.textAlign = "center";
  mensaje.style.fontSize = "18px";
  mensaje.style.fontWeight = "bold";
  mensaje.style.color = "blue";

  carrito.parentElement.insertBefore(mensaje, carrito);

  setTimeout(() => {
    vaciarCarrito();
    mensaje.remove();
  }, 3000);
}













