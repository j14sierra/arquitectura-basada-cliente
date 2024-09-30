let reservas = JSON.parse(localStorage.getItem('reservas')) || [];
let paginaActual = 1;
const reservasPorPagina = 5;

// Función para mostrar reservas
function mostrarReservas() {
    const listaReservas = document.getElementById('lista-reservas');
    listaReservas.innerHTML = '';

    const reservasFiltradas = reservas.slice((paginaActual - 1) * reservasPorPagina, paginaActual * reservasPorPagina);

    reservasFiltradas.forEach((reserva, index) => {
        const li = document.createElement('tr');
        li.innerHTML = `
            <td>${reserva.nombre}</td>
            <td>${reserva.fecha}</td>
            <td>${reserva.hora}</td>
            <td>
                <button onclick="editarReserva(${(paginaActual - 1) * reservasPorPagina + index})">Editar</button>
                <button onclick="eliminarReserva(${(paginaActual - 1) * reservasPorPagina + index})">Eliminar</button>
            </td>
        `;
        listaReservas.appendChild(li);
    });

    actualizarPaginacion();
}

// Función para agregar una nueva reserva
function agregarReserva(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    const nuevaReserva = {
        nombre: nombre,
        fecha: fecha,
        hora: hora
    };

    reservas.push(nuevaReserva);
    localStorage.setItem('reservas', JSON.stringify(reservas));

    document.getElementById('form-reserva').reset();
    mostrarReservas();
}

// Función para eliminar una reserva
function eliminarReserva(index, aux) {
    if (aux != 1) {
        if (confirm('¿Estás seguro de que deseas eliminar esta reserva?')) {
            reservas.splice(index, 1);
            localStorage.setItem('reservas', JSON.stringify(reservas));
            mostrarReservas();
        }
    } else {
        reservas.splice(index, 1);
        localStorage.setItem('reservas', JSON.stringify(reservas));
        aux = 0;
        mostrarReservas();
    }

}

// Función para editar una reserva
function editarReserva(index) {
    
    if (confirm('¿Estás seguro de que deseas editar esta reserva?')) {
        aux = 1;
        const reserva = reservas[index];
        document.getElementById('nombre').value = reserva.nombre;
        document.getElementById('fecha').value = reserva.fecha;
        document.getElementById('hora').value = reserva.hora;

        // Eliminar la reserva editada para poder agregarla nuevamente
        eliminarReserva(index,aux);
    }
}

// Función para filtrar reservas por fecha
function filtrarPorFecha() {
    const fechaFiltro = document.getElementById('filtro-fecha').value;
    if (fechaFiltro) {
        reservas = JSON.parse(localStorage.getItem('reservas')) || [];
        reservas = reservas.filter(reserva => reserva.fecha === fechaFiltro);
    }
    mostrarReservas();
}

// Funciones de paginación
function cambiarPagina(direccion) {
    paginaActual += direccion;
    mostrarReservas();
}

function actualizarPaginacion() {
    const totalPaginas = Math.ceil(reservas.length / reservasPorPagina);
    document.getElementById('prev').disabled = paginaActual === 1;
    document.getElementById('next').disabled = paginaActual === totalPaginas;
}

// Escuchar el evento de envío del formulario
document.getElementById('form-reserva').addEventListener('submit', agregarReserva);

// Mostrar reservas al cargar la página
mostrarReservas();
