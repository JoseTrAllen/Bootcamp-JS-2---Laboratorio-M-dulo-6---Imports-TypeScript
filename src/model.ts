interface Partida {
  puntos: number;
  cartaTrasera: string;
  asDeCopas: string;
  dosDeCopas: string;
  tresDeCopas: string;
  cuatroDeCopas: string
  cincoDeCopas: string;
  seisDeCopas: string;
  sieteDeCopas: string;
  sotaDeCopas: string;
  caballoDeCopas: string;
  reyDeCopas: string;
}

export const partida: Partida = {
  puntos: 0,
  cartaTrasera: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg",
  asDeCopas: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg",
  dosDeCopas: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg",
  tresDeCopas: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg",
  cuatroDeCopas: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg",
  cincoDeCopas: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg",
  seisDeCopas: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg",
  sieteDeCopas: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg",
  sotaDeCopas: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg",
  caballoDeCopas: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg",
  reyDeCopas: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg"
}

export function setPuntos (nuevosPuntos: number) {
  return partida.puntos = nuevosPuntos;
}

