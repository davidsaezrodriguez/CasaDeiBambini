import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor() {}

  getImagesInstalaciones() {
    return [
      {
        previewImageSrc: '/./assets/images/entrada.jpg',
        thumbnailImageSrc: '/./assets/images/entrada.jpg',
        alt: 'Entrada',
        title: 'Entrada',
      },
      {
        previewImageSrc: '/./assets/images/interior_area_lenguaje_cultura_matemtaicas.jpg',
        thumbnailImageSrc: '/./assets/images/interior_area_lenguaje_cultura_matemtaicas.jpg',
        alt: 'Interior area de lenguaje, cultura y matematicas',
        title: 'Interior area de lenguaje, cultura y matematicas',
      },
      {
        previewImageSrc: '/./assets/images/interior_area_lenguaje_vida_practica.jpg',
        thumbnailImageSrc: '/./assets/images/interior_area_lenguaje_vida_practica.jpg',
        alt: 'Interior area de lenguaje y vida practica',
        title: 'Interior area de lenguaje y vida practica',
      },
      {
        previewImageSrc: '/./assets/images/interior_area_sensoria_despacho.jpg',
        thumbnailImageSrc: '/./assets/images/interior_area_sensoria_despacho.jpg',
        alt: 'Interior area sensorial y despacho',
        title: 'Interior area sensorial y despacho',
      },
      {
        previewImageSrc: '/./assets/images/mueble_areas_conocimiento.png',
        thumbnailImageSrc: '/./assets/images/mueble_areas_conocimiento.png',
        alt: 'Mueble de areas de conocimiento',
        title: 'Mueble de areas de conocimiento',
      },
      {
        previewImageSrc: '/./assets/images/zona_de_dormir.jpg',
        thumbnailImageSrc: '/./assets/images/zona_de_dormir.jpg',
        alt: 'Zona de dormir',
        title: 'Zona de dormir',
      },
      
      {
        previewImageSrc: '/./assets/images/patio.png',
        thumbnailImageSrc: '/./assets/images/patio.png',
        alt: 'Patio',
        title: 'Patio',
      },
    ];
  }

  getImagesVidaPractica() {
    return [
      {
        previewImageSrc: '/./assets/images/vidapractic2.jpg',
      },
      {
        previewImageSrc: '/./assets/images/vidapractic3.jpg',
      },
      {
        previewImageSrc: '/./assets/images/vidapractic4.jpg',
      },
      {
        previewImageSrc: '/./assets/images/vidapractic5.jpg',
      },
      {
        previewImageSrc: '/./assets/images/vidapractic6.jpg',
      },
      
    ];
  }
  getImagesSensorial() {
    return [
      {
        previewImageSrc: '/./assets/images/vidapractic4.jpg',
      },
      {
        previewImageSrc: '/./assets/images/vidapractic5.jpg',
      },
      
    ];
  }
  getImagesVidaMatematicas() {
    return [
      {
        previewImageSrc: '/./assets/images/vidapractic2.jpg',
      },
      {
        previewImageSrc: '/./assets/images/vidapractic3.jpg',
      },
      
    ];
  }
  getImagesVidaLenguaje() {
    return [
      {
        previewImageSrc: '/./assets/images/vidapractic5.jpg',
      },
      {
        previewImageSrc: '/./assets/images/vidapractic6.jpg',
      },
      
    ];
  }
  getImagesVidaCultura() {
    return [
      {
        previewImageSrc: '/./assets/images/vidapractic2.jpg',
      },
      {
        previewImageSrc: '/./assets/images/vidapractic4.jpg',
      },
      
    ];
  }
}
