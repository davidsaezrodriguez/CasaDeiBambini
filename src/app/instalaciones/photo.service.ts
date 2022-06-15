import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor() {}

  getImages() {
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
}
