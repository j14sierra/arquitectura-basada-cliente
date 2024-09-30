
# Sistema de Reservas

Este proyecto es un sistema de reservas basado en cliente que permite a los usuarios crear, editar y eliminar reservas. La aplicación está construida utilizando HTML, CSS y JavaScript, y almacena los datos en el almacenamiento local del navegador.

## Características

- **Reservas**: Permite a los usuarios crear nuevas reservas.
- **Edición**: Opción para editar reservas existentes.
- **Eliminación**: Opción para eliminar reservas.
- **Filtrado**: Permite filtrar las reservas por fecha específica.
- **Paginación**: Muestra las reservas paginadas para una mejor usabilidad.

## Tecnologías Utilizadas

- **HTML**: Para la estructura básica de la aplicación.
- **CSS**: Para el estilo y diseño visual de la interfaz.
- **JavaScript**: Para la lógica y funcionalidad de la aplicación, incluyendo la manipulación del DOM y el almacenamiento local.

## Estructura del Proyecto

```
/sistema-de-reservas
├── index.html      # Archivo principal de la aplicación
├── style.css       # Estilos CSS para la aplicación
└── script.js       # Lógica en JavaScript para la funcionalidad
```

## Cómo Ejecutar el Proyecto

1. **Clonar el Repositorio**:
   ```bash
   git clone https://github.com/j14sierra/arquitectura-basada-cliente.git
   ```

2. **Navegar a la Carpeta del Proyecto**:
   ```bash
   cd arquitectura-basada-cliente
   ```

3. **Abrir el Archivo `index.html`**:
   Abre el archivo `index.html` en un navegador web. Puedes hacer esto haciendo doble clic en el archivo o arrastrándolo a la ventana del navegador.

4. **Usar la Aplicación**:
   - Completa el formulario para agregar una nueva reserva.
   - Usa los botones de "Editar" o "Eliminar" para modificar o eliminar reservas existentes.
   - Navega a través de las reservas utilizando los botones de paginación.

## Documentación del Código

El código está documentado internamente mediante comentarios que explican la funcionalidad de cada sección. A continuación, se explican brevemente las principales funciones:

- **mostrarReservas()**: Muestra todas las reservas en la tabla.
- **agregarReserva(event)**: Agrega una nueva reserva a la lista.
- **eliminarReserva(index)**: Elimina una reserva después de una confirmación.
- **editarReserva(index)**: Edita una reserva, solicitando confirmación primero.
- **cambiarPagina(direccion)**: Cambia la página de reservas mostradas.
- **actualizarPaginacion()**: Actualiza los botones de paginación según la cantidad de reservas.

## Objetivo del Proyecto

El objetivo de este proyecto es proporcionar una interfaz sencilla y efectiva para la gestión de reservas, que sea fácil de usar y accesible. Este sistema es ideal para pequeños negocios o eventos que requieran la gestión de citas y reservas.

## Contribuciones

Si deseas contribuir a este proyecto, no dudes en abrir un *issue* o enviar un *pull request*. Todas las contribuciones son bienvenidas.

