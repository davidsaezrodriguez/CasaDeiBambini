import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { PhotoService } from '../instalaciones/photo.service';
@Component({
  selector: 'app-metodologia',
  templateUrl: './metodologia.component.html',
  styleUrls: ['./metodologia.component.scss'],
})
export class MetodologiaComponent implements OnInit {
  constructor(
    private photoService : PhotoService
  ) {}

  imagesVidaPractica: any[] = [];
  imagesSensorial: any[] = [];
  imagesMatematicas: any[] = [];
  imagesLenguaje: any[] = [];
  imagesCultura: any[] = [];


  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  ngOnInit(): void {
    this.imagesVidaPractica = this.photoService.getImagesVidaPractica();
    this.imagesSensorial = this.photoService.getImagesSensorial();
    this.imagesMatematicas = this.photoService.getImagesVidaMatematicas();
    this.imagesLenguaje = this.photoService.getImagesVidaLenguaje();
    this.imagesCultura = this.photoService.getImagesVidaCultura();
  }
  itemsMenu = [
    { title: 'I N I C I O', href: '/' },
    { title: 'I N S T A L A C I O N E S', href: '/instalaciones' },
    { title: 'M E T O D O L O G I A', href: '/metodologia' },
    { title: 'C O N T A C T O', href: '/contacto' },
  ];
  // Funcion con la que expandimos y cerramos el navbar para desplegar las opciones en la version movil

  navExpandida = false; // Var para comprobar si la nav esta expandida o no
  expandirNav() {
    if (screen.width < 768) {
      if (!this.navExpandida) {
        $('#navbar').height(260);

        $('.navbarDiv').removeClass('collapse');
        $('.navbarDiv').addClass('show');

        $('.botoncolapsar').attr('aria-expanded', 'true');
        $('.botoncolapsar').removeClass('collapsed');
        this.navExpandida = true;
      } else {
        $('#navbar').height(30);

        $('.navbarDiv').addClass('collapse');
        $('.navbarDiv').removeClass('show');

        $('.botoncolapsar').attr('aria-expanded', 'false');
        $('.botoncolapsar').addClass('collapsed');

        this.navExpandida = false;
      }
    }
  }
}
