import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor() {}

  getImagesInstalaciones() {
    return [
      
      {
        previewImageSrc: '/./assets/images/fachadaprincipal.jpg',
        thumbnailImageSrc: '/./assets/images/fachadaprincipal.jpg',
        alt: 'Fachada principal',
        title: 'Fachada principal',
      },
      {
        previewImageSrc: '/./assets/images/entrada.jpg',
        thumbnailImageSrc: '/./assets/images/entrada.jpg',
        alt: 'Entrada y despacho',
        title: 'Entrada y despacho',
      },
      {
        previewImageSrc: '/./assets/images/interior_area_lenguaje_cultura_matemtaicas.jpg',
        thumbnailImageSrc: '/./assets/images/interior_area_lenguaje_cultura_matemtaicas.jpg',
        alt: 'Interior: área de lenguaje, cultura y matemáticas',
        title: 'Interior: área de lenguaje, cultura y matemáticas',
      },
      {
        previewImageSrc: '/./assets/images/interior_area_lenguaje_vida_practica.jpg',
        thumbnailImageSrc: '/./assets/images/interior_area_lenguaje_vida_practica.jpg',
        alt: 'Interior: área de lenguaje y vida practica',
        title: 'Interior: área de lenguaje y vida practica ',
      },
      {
        previewImageSrc: '/./assets/images/interior_area_sensoria_despacho.jpg',
        thumbnailImageSrc: '/./assets/images/interior_area_sensoria_despacho.jpg',
        alt: 'Interior: área sensorial ',
        title: 'Interior: área sensorial ',
      },
      {
        previewImageSrc: '/./assets/images/mueble_areas_conocimiento.png',
        thumbnailImageSrc: '/./assets/images/mueble_areas_conocimiento.png',
        alt: 'Mueble de áreas de conocimiento: matemáticas, lenguaje y vida práctica',
        title: 'Mueble de áreas de conocimiento: matemáticas, lenguaje y vida práctica',
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
        previewImageSrc: '/./assets/images/sensorial22.jpg',
      },
      {
        previewImageSrc: '/./assets/images/sensorial33.jpg',
      },
      {
        previewImageSrc: '/./assets/images/sensorial4.jpg',

      },
      {
        previewImageSrc: '/./assets/images/sensorial5.jpg',

      },
      {
        previewImageSrc: '/./assets/images/sensorial66.jpeg',

      },
      
    ];
  }
  getImagesVidaMatematicas() {
    return [
      {
        previewImageSrc: '/./assets/images/mate2.JPG',
      },
      {
        previewImageSrc: '/./assets/images/mate3.jpg',
      },
      {
        previewImageSrc: '/./assets/images/mate4.jpg',
      },
      {
        previewImageSrc: '/./assets/images/mate55.jpg',
      },
      {
        previewImageSrc: '/./assets/images/mate6.jpg',
      },
      
    ];
  }
  getImagesVidaLenguaje() {
    return [
      {
        previewImageSrc: '/./assets/images/lenguaje2.jpg',
      },
      {
        previewImageSrc: '/./assets/images/lenguaje3.jpg',
      },
      {
        previewImageSrc: '/./assets/images/lenguaje4.jpg',
      },
      {
        previewImageSrc: '/./assets/images/lenguaje5.jpg',
      },
      {
        previewImageSrc: '/./assets/images/lenguaje6.png',
      },
      
    ];
  }
  getImagesVidaCultura() {
    return [
      {
        previewImageSrc: '/./assets/images/cultura2.jpg',
      },
      {
        previewImageSrc: '/./assets/images/cultura3.jpg',
      },
      {
        previewImageSrc: '/./assets/images/cultura4.jpg',
      },
      {
        previewImageSrc: '/./assets/images/cultura5.jpg',
      },
      {
        previewImageSrc: '/./assets/images/cultura6.jpg',
      },
      
    ];
  }
}
