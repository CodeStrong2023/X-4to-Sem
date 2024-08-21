# Avatar: Juego de Selección y Pelea de Personajes

Este es un pequeño juego web donde puedes seleccionar un personaje y pelear contra un enemigo seleccionado aleatoriamente.

## Estructura del Proyecto

El proyecto consta de dos archivos principales:

- `index.html`: Este archivo contiene la estructura HTML de la aplicación.
- `js/avatar.js`: Este archivo contiene el código JavaScript que maneja la lógica del juego.

## Clases y Funciones en el Código

### Clase `AvatarGame`

La clase `AvatarGame` representa el juego en sí mismo. Contiene funciones para inicializar el juego, seleccionar personajes y realizar ataques.

#### Métodos

- `seleccionarEnemigo(personajeSeleccionadoId)`: Esta función selecciona aleatoriamente un enemigo que no sea el personaje seleccionado por el jugador.
- `inicializarJuego()`: Esta función inicializa el juego cuando se carga la página.
- `manejarSeleccionPersonaje()`: Esta función maneja la selección de un personaje por parte del jugador.
- `actualizarInterfaz()`: Esta función actualiza la interfaz gráfica del juego con la información del personaje y el enemigo seleccionados.
- `mostrarMensaje(mensaje)`: Esta función muestra un mensaje en la interfaz de usuario.

### Event Listeners

El código incluye un event listener que espera a que el jugador haga clic en el botón "Seleccionar". Cuando se hace clic en este botón, se llama al método `manejarSeleccionPersonaje()` de la clase `AvatarGame`.

## Uso

Para jugar al juego, simplemente abre el archivo `index.html` en tu navegador web. Selecciona un personaje haciendo clic en uno de los botones de radio y luego haz clic en el botón "Seleccionar" para iniciar el juego.
