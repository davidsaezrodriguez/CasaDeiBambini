import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor() {}

  getImagesInstalaciones() {
    return [
      {
        previewImageSrc: '/./assets/images/colchonetas.jpg',
        thumbnailImageSrc: '/./assets/images/colchonetas.jpg',
        alt: 'Colchonetas',
        title: 'Zona de dormir',
      },
      {
        previewImageSrc: '/./assets/images/interior.jpg',
        thumbnailImageSrc: '/./assets/images/interior.jpg',
        alt: 'Interior',
        title: 'Interior',
      },
      {
        previewImageSrc: '/./assets/images/pared.png',
        thumbnailImageSrc: '/./assets/images/pared.png',
        alt: 'Pared descripcion',
        title: 'Pared',
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
