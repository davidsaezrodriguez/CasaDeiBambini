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
        previewImageSrc: '/./assets/images/vidapractica1.jpg',
      },
      {
        previewImageSrc: '/./assets/images/vidapractica2.jpg',
      },
      
    ];
  }
  getImagesSensorial() {
    return [
      {
        previewImageSrc: '/./assets/images/vidapractica1.jpg',
      },
      {
        previewImageSrc: '/./assets/images/vidapractica2.jpg',
      },
      
    ];
  }
  getImagesVidaMatematicas() {
    return [
      {
        previewImageSrc: '/./assets/images/vidapractica1.jpg',
      },
      {
        previewImageSrc: '/./assets/images/vidapractica2.jpg',
      },
      
    ];
  }
  getImagesVidaLenguaje() {
    return [
      {
        previewImageSrc: '/./assets/images/vidapractica1.jpg',
      },
      {
        previewImageSrc: '/./assets/images/vidapractica2.jpg',
      },
      
    ];
  }
  getImagesVidaCultura() {
    return [
      {
        previewImageSrc: '/./assets/images/vidapractica1.jpg',
      },
      {
        previewImageSrc: '/./assets/images/vidapractica2.jpg',
      },
      
    ];
  }
}
