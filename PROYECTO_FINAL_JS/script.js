const API_URL = "https://apibox.vercel.app/gB2sAELT4kaL8sqqP2CM0kpMJrvgpMis/api/personajes";

const form = document.getElementById('form-personaje');
const inputId = document.getElementById('char-id');
const inputNombre = document.getElementById('char-name');
const inputImagen = document.getElementById('char-image');
const inputRaza = document.getElementById('char-race');
const inputGenero = document.getElementById('char-gender');
const formTitle = document.getElementById('form-title');
const btnGuardar = document.getElementById('btn-guardar');
const btnCancelar = document.getElementById('btn-cancelar');
const contenedor = document.getElementById('contenedor-personajes');
const totalCount = document.getElementById('total-count');
const loading = document.getElementById('loading');

let listaPersonajesCache = [];
let paginaActual = 1;
const personajesPorPagina = 5;

// 1. Cargar personajes al iniciar
document.addEventListener('DOMContentLoaded', () => {
  obtenerPersonajes();
  limpiarDuplicadosAPI(); // Borra los duplicados de la APIBox
});

async function obtenerPersonajes() {
  loading.style.display = 'block';
  contenedor.innerHTML = '';

  try {
    const respuesta = await fetch(API_URL);
    const personajes = await respuesta.json();
    loading.style.display = 'none';

    if (Array.isArray(personajes)) {

      const nombresVistos = new Set();
      const personajesUnicos = personajes.filter(personaje => {
        const nombreNormalizado = (personaje.name || '').trim().toLowerCase();
        if (nombresVistos.has(nombreNormalizado)) {
          return false;
        }
        nombresVistos.add(nombreNormalizado);
        return true;
      });

      listaPersonajesCache = personajesUnicos;
      totalCount.textContent = personajesUnicos.length;

      // Lógica de paginación (5 personajes por página)
      const inicio = (paginaActual - 1) * personajesPorPagina;
      const fin = inicio + personajesPorPagina;
      const personajesPagina = personajesUnicos.slice(inicio, fin);

      personajesPagina.forEach(personaje => {
        const id = personaje._id || personaje.id;
        const card = document.createElement('div');
        card.className = 'char-item';

        const genderClass = personaje.gender === 'Female' ? 'badge-female' : 'badge-gender';

        card.innerHTML = `
          <div class="char-details">
            <img src="${personaje.image || 'https://via.placeholder.com/60'}" alt="${personaje.name}" onerror="this.src='https://via.placeholder.com/60'">
            <div class="char-info">
              <h4>${personaje.name}</h4>
              <div class="badges">
                <span class="badge badge-saiyan">${personaje.race || 'Desconocida'}</span>
                <span class="badge ${genderClass}">${personaje.gender || 'Unknown'}</span>
              </div>
            </div>
          </div>
          <div class="item-actions">
            <button class="btn-edit" data-id="${id}">✏️ Editar</button>
            <button class="btn-delete" data-id="${id}">🗑️ Eliminar</button>
          </div>
        `;

        card.querySelector('.btn-edit').addEventListener('click', () => prepararEditar(id));
        card.querySelector('.btn-delete').addEventListener('click', () => eliminarPersonaje(id));

        contenedor.appendChild(card);
      });

      renderizarPaginacion(personajesUnicos.length);
    } else {
      totalCount.textContent = '0';
    }
  } catch (error) {
    console.error("Error al obtener personajes:", error);
    loading.style.display = 'none';
    totalCount.textContent = '0';
  }
}

// Renderizar controles de paginación
function renderizarPaginacion(totalItems) {
  let paginacionContenedor = document.getElementById('paginacion-container');
  
  if (!paginacionContenedor) {
    paginacionContenedor = document.createElement('div');
    paginacionContenedor.id = 'paginacion-container';
    paginacionContenedor.className = 'paginacion';
    contenedor.after(paginacionContenedor);
  }

  paginacionContenedor.innerHTML = '';
  const totalPaginas = Math.ceil(totalItems / personajesPorPagina);

  if (totalPaginas <= 1) return;

  // Botón Anterior
  const btnAnterior = document.createElement('button');
  btnAnterior.textContent = '‹ Anterior';
  btnAnterior.disabled = paginaActual === 1;
  btnAnterior.addEventListener('click', () => {
    if (paginaActual > 1) {
      paginaActual--;
      obtenerPersonajes();
    }
  });
  paginacionContenedor.appendChild(btnAnterior);

  // Botones de número de página
  for (let i = 1; i <= totalPaginas; i++) {
    const btnPagina = document.createElement('button');
    btnPagina.textContent = i;
    if (i === paginaActual) btnPagina.classList.add('active');
    btnPagina.addEventListener('click', () => {
      paginaActual = i;
      obtenerPersonajes();
    });
    paginacionContenedor.appendChild(btnPagina);
  }

  // Botón Siguiente
  const btnSiguiente = document.createElement('button');
  btnSiguiente.textContent = 'Siguiente ›';
  btnSiguiente.disabled = paginaActual === totalPaginas;
  btnSiguiente.addEventListener('click', () => {
    if (paginaActual < totalPaginas) {
      paginaActual++;
      obtenerPersonajes();
    }
  });
  paginacionContenedor.appendChild(btnSiguiente);
}

// 2. Guardar o Editar personaje
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  btnGuardar.disabled = true;

  const personaje = {
    name: inputNombre.value.trim(),
    image: inputImagen.value.trim(),
    race: inputRaza.value.trim(),
    gender: inputGenero.value
  };

  const id = inputId.value;

  try {
    if (id === '') {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(personaje)
      });
    } else {
      await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(personaje)
      });
    }

    limpiarFormulario();
    await obtenerPersonajes();
  } catch (error) {
    console.error("Error al guardar personaje:", error);
  } finally {
    btnGuardar.disabled = false;
  }
});

function prepararEditar(id) {
  const personaje = listaPersonajesCache.find(p => (p._id || p.id) === id);
  if (!personaje) return;

  inputId.value = id;
  inputNombre.value = personaje.name || '';
  inputImagen.value = personaje.image || '';
  inputRaza.value = personaje.race || '';
  inputGenero.value = personaje.gender || '';

  formTitle.textContent = '✏️ EDITAR PERSONAJE';
  btnGuardar.textContent = 'Actualizar Personaje';
  btnCancelar.style.display = 'block';
}

async function eliminarPersonaje(id) {
  if (confirm('¿Deseas eliminar este personaje?')) {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      obtenerPersonajes();
    } catch (error) {
      console.error("Error al eliminar personaje:", error);
    }
  }
}

btnCancelar.addEventListener('click', limpiarFormulario);

function limpiarFormulario() {
  form.reset();
  inputId.value = '';
  formTitle.textContent = '👤 NUEVO PERSONAJE';
  btnGuardar.textContent = '+ Agregar Personaje';
  btnCancelar.style.display = 'none';
}

// Borra los duplicados directamente de APIBox en segundo plano
async function limpiarDuplicadosAPI() {
  try {
    const respuesta = await fetch(API_URL);
    const personajes = await respuesta.json();
    if (!Array.isArray(personajes)) return;

    const nombresVistos = new Set();
    
    for (const personaje of personajes) {
      const id = personaje._id || personaje.id;
      const nombreNormalizado = (personaje.name || '').trim().toLowerCase();

      if (nombresVistos.has(nombreNormalizado)) {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      } else {
        nombresVistos.add(nombreNormalizado);
      }
    }
  } catch (error) {
    console.error("Error al limpiar duplicados en API:", error);
  }
}
