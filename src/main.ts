
import {procesoJuego} from "./ui"

const botonPedirCarta = document.getElementById("boton-pedir-carta");
if (botonPedirCarta !== null && 
	botonPedirCarta !== undefined && 
  botonPedirCarta instanceof HTMLButtonElement) {
    botonPedirCarta.addEventListener("click", procesoJuego);
  }