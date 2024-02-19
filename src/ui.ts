import {partida, setPuntos} from "./model"

import {generarNumero, obtenerNumero, obtenerPuntosCarta, sumarPuntuacion} from "./motor"

export const mostrarFotoCarta = document.getElementById("imagen-carta");
export const mensajeAlJugador = document.getElementById("mensaje-al-jugador");
export const idPuntuacion = document.getElementById("puntuacion");

export function pintaCarta (numeroCarta: number) {
  switch (numeroCarta) {
    case 1:
      return partida.asDeCopas;
    case 2:
      return partida.dosDeCopas;
    case 3:
      return partida.tresDeCopas;
    case 4:
      return partida.cuatroDeCopas;
    case 5:
      return partida.cincoDeCopas;
    case 6:
      return partida.seisDeCopas;
    case 7:
      return partida.sieteDeCopas;
    case 10:
      return partida.sotaDeCopas;
    case 11:
      return partida.caballoDeCopas;
    case 12:
      return partida.reyDeCopas;
    default:
      return partida.cartaTrasera;    
  }
}

export function plantarse () {
  if (partida.puntos <= 4.5) {
    mostrarMensajePlantarse("Has sido muy conservador");
  }
  if (partida.puntos === 5 || partida.puntos === 5.5) {
    mostrarMensajePlantarse("Te ha entrado el canguelo ¿eh?");
  }
  if (partida.puntos === 6 || partida.puntos === 6.5 || partida.puntos === 7) {
    mostrarMensajePlantarse("Casi casi...");
  }
  deshabilitarBotonesAlPlantarse ();
}

export function procesoJuego () {
  let numeroRandom = generarNumero();
  numeroRandom = obtenerNumero(numeroRandom);
  let tipoCarta = pintaCarta(numeroRandom);
  muestraCarta(tipoCarta);
  let puntosCarta = obtenerPuntosCarta(numeroRandom);
  let puntosSumados = sumarPuntuacion(puntosCarta);
  setPuntos(puntosSumados);
  mostrarPuntuacion();
  gestionarFinalPartida ();
}

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

export function gestionarFinalPartida () {
  if (partida.puntos === 7.5) {
    ganarPartida();
  }

  if (partida.puntos > 7.5) {
    perderPartida();
  }
}

export const botonReiniciar = document.getElementById("boton-volver-jugar");
if (botonReiniciar !== null && 
  botonReiniciar !== undefined && 
  botonReiniciar instanceof HTMLButtonElement) {
  botonReiniciar.addEventListener("click", reinicioPartida);
}
