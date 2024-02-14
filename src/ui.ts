import {partida} from "./model"

import {plantarse, procesoJuego,} from "./motor"

export const mostrarFotoCarta = document.getElementById("imagen-carta");
export const mensajeAlJugador = document.getElementById("mensaje-al-jugador");
export const idPuntuacion = document.getElementById("puntuacion");

export function muestraCarta (urlCarta: string) {
  if (mostrarFotoCarta !== undefined && 
    mostrarFotoCarta !== null &&
    mostrarFotoCarta instanceof HTMLImageElement) {
      mostrarFotoCarta.src = urlCarta;
    }
}

export function mostrarPuntuacion () {
  if (idPuntuacion !== undefined && 
    idPuntuacion !== null &&
    idPuntuacion instanceof HTMLHeadingElement) {
      idPuntuacion.innerHTML = partida.puntos.toString();
    }
}

export function ganarPartida () {
  if (mensajeAlJugador !== undefined && 
    mensajeAlJugador !== null &&
    mensajeAlJugador instanceof HTMLParagraphElement) {
      mensajeAlJugador.innerHTML = "¡Lo has clavado! ¡Enhorabuena!"
    }
  deshabilitarBotonesAlGanarPartida ();
}

export function deshabilitarBotonesAlGanarPartida () {
  const elementoBotonPedirCarta = document.getElementById("boton-pedir-carta");
  if (elementoBotonPedirCarta !== null && 
    elementoBotonPedirCarta !== undefined && 
    elementoBotonPedirCarta instanceof HTMLButtonElement) {
      elementoBotonPedirCarta.disabled = true;
    }
  const elementoBotonPlantarse = document.getElementById("boton-plantarse");
  if (elementoBotonPlantarse !== null && elementoBotonPlantarse !== undefined && elementoBotonPlantarse instanceof HTMLButtonElement) {
    elementoBotonPlantarse.disabled = true;
  }
}

export function perderPartida () {
  if (mensajeAlJugador !== undefined && 
    mensajeAlJugador !== null &&
    mensajeAlJugador instanceof HTMLParagraphElement) {
      mensajeAlJugador.innerHTML = "GameOver";
    }
  deshabilitarBotonesAlPerderPartida ();
}

export function deshabilitarBotonesAlPerderPartida () {
  const elementoBotonPedirCarta = document.getElementById("boton-pedir-carta");
  if (elementoBotonPedirCarta !== null && 
    elementoBotonPedirCarta !== undefined && elementoBotonPedirCarta instanceof HTMLButtonElement) {
      elementoBotonPedirCarta.disabled = true;
    }
  const elementoBotonPlantarse = document.getElementById("boton-plantarse");
  if (elementoBotonPlantarse !== null && 
    elementoBotonPlantarse !== undefined && 
    elementoBotonPlantarse instanceof HTMLButtonElement) {
      elementoBotonPlantarse.disabled = true;
    }
}

export function mostrarMensajePlantarse (mensaje: string) {
  if(mensajeAlJugador !== undefined &&
    mensajeAlJugador !== null &&
    mensajeAlJugador instanceof HTMLParagraphElement){
      mensajeAlJugador.innerHTML = mensaje;
    }
}

export function deshabilitarBotonesAlPlantarse () {
  const elementoBotonPedirCarta = document.getElementById("boton-pedir-carta");
  if (elementoBotonPedirCarta !== null && 
    elementoBotonPedirCarta !== undefined && 
    elementoBotonPedirCarta instanceof HTMLButtonElement) {
      elementoBotonPedirCarta.disabled = true;
    }
  const elementoBotonQuePasaria = document.getElementById("boton-que-pasaria");
  if (elementoBotonQuePasaria !== null && 
    elementoBotonQuePasaria !== undefined && 
    elementoBotonQuePasaria instanceof HTMLButtonElement) {
      elementoBotonQuePasaria.style.display = 'block';
    }
  if (botonPlantarse !== null &&
    botonPlantarse !== undefined &&
    botonPlantarse instanceof HTMLButtonElement) {
      botonPlantarse.disabled = true;
    }
}

export const botonPlantarse = document.getElementById("boton-plantarse");
if (botonPlantarse !== null && 
  botonPlantarse !== undefined && 
  botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.addEventListener("click", plantarse);
  }

  export function quePasaria () {
  procesoJuego();
  if(mensajeAlJugador !== undefined &&
    mensajeAlJugador !== null &&
    mensajeAlJugador instanceof HTMLParagraphElement){
      mensajeAlJugador.innerHTML = "Esto habría pasado...";
    }
}

export const botonQuePasaria = document.getElementById("boton-que-pasaria");
if (botonQuePasaria !== null && 
  botonQuePasaria !== undefined && 
  botonQuePasaria instanceof HTMLButtonElement) {
    botonQuePasaria.addEventListener("click", quePasaria);
  }

  export function reinicioPartida () {
    partida.puntos = 0;
  if (idPuntuacion !== undefined && 
    idPuntuacion !== null &&
    idPuntuacion instanceof HTMLHeadingElement) {
    idPuntuacion.innerHTML = partida.puntos.toString();
  }
  if (mostrarFotoCarta !== undefined && 
    mostrarFotoCarta !== null &&
    mostrarFotoCarta instanceof HTMLImageElement) {
    mostrarFotoCarta.src = partida.cartaTrasera;
  }
  if(mensajeAlJugador !== undefined &&
    mensajeAlJugador !== null &&
    mensajeAlJugador instanceof HTMLParagraphElement){
    mensajeAlJugador.innerHTML = "";
  }
  const elementoBotonPedirCarta = document.getElementById("boton-pedir-carta");
  if (elementoBotonPedirCarta !== null && 
    elementoBotonPedirCarta !== undefined && 
    elementoBotonPedirCarta instanceof HTMLButtonElement) {
    elementoBotonPedirCarta.disabled = false;
  }
  
  const elementoBotonPlantarse = document.getElementById("boton-plantarse");
  if (elementoBotonPlantarse !== null && 
    elementoBotonPlantarse !== undefined && 
    elementoBotonPlantarse instanceof HTMLButtonElement) {
    elementoBotonPlantarse.disabled = false;
  }
  
  const elementoBotonQuePasaria = document.getElementById("boton-que-pasaria");
  if (elementoBotonQuePasaria !== null && 
    elementoBotonQuePasaria !== undefined && 
    elementoBotonQuePasaria instanceof HTMLButtonElement) {
    elementoBotonQuePasaria.style.display = "none";
  }
}

export const botonReiniciar = document.getElementById("boton-volver-jugar");
if (botonReiniciar !== null && 
  botonReiniciar !== undefined && 
  botonReiniciar instanceof HTMLButtonElement) {
  botonReiniciar.addEventListener("click", reinicioPartida);
}
