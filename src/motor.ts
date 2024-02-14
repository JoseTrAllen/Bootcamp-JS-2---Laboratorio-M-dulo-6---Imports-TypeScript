import {partida} from "./model"

import {
  deshabilitarBotonesAlPlantarse,
  ganarPartida,
  mostrarMensajePlantarse,
  mostrarPuntuacion,
  muestraCarta,
  perderPartida
} from "./ui"



export function generarNumero () {
  return Math.floor(Math.random() * 11);
}

export function obtenerNumero (numeroAleatorio: number) {
  if (numeroAleatorio === 0) {
    return 1;
  }
  return numeroAleatorio > 7 ? numeroAleatorio += 2 : numeroAleatorio;
}

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

export function obtenerPuntosCarta (puntosCarta: number) {
  if (puntosCarta > 7) {
    return puntosCarta = 0.5;
  } else {
    return puntosCarta;
  }
}

export function sumarPuntuacion (suma: number) {
  return partida.puntos + suma;
}

export function setPuntos (nuevosPuntos: number) {
  return partida.puntos = nuevosPuntos;
}

export function gestionarFinalPartida () {
  if (partida.puntos === 7.5) {
    ganarPartida();
  }

  if (partida.puntos > 7.5) {
    perderPartida();
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