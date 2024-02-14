
import {procesoJuego} from "./motor"

const botonPedirCarta = document.getElementById("boton-pedir-carta");
if (botonPedirCarta !== null && 
	botonPedirCarta !== undefined && 
  botonPedirCarta instanceof HTMLButtonElement) {
    botonPedirCarta.addEventListener("click", procesoJuego);
  }