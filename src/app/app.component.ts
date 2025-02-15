import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'World Tours';
  backimg = 'assets/local1.jpg';
  translate = -290;

  localname = 'Lago de Como - Itália';
  localdesc =
    'O Lago de Como (Lago di Como) é um dos destinos mais deslumbrantes da Itália, localizado na região da Lombardia, ao norte do país. Com sua forma de um "Y" invertido, ele é cercado por montanhas majestosas, colinas cobertas de vegetação exuberante e charmosas cidades e vilarejos à beira da água.';

  carouselImages = [
    {
      src: 'assets/local1.jpg',
      id: 'lc1',
      alt: 'Lago de Como - Itália',
      bnd: 'assets/italy.svg',
      desc: 'O Lago de Como (Lago di Como) é um dos destinos mais deslumbrantes da Itália, localizado na região da Lombardia, ao norte do país. Com sua forma de um "Y" invertido, ele é cercado por montanhas majestosas, colinas cobertas de vegetação exuberante e charmosas cidades e vilarejos à beira da água.',
    },
    {
      src: 'assets/local2.jpg',
      id: 'lc2',
      alt: 'Burma - Myanmar',
      bnd: 'assets/maynmar.png',
      desc: 'Burma (Mianmar) é um país do Sudeste Asiático conhecido por sua rica herança cultural, templos impressionantes e paisagens naturais deslumbrantes. Oficialmente chamado de República da União de Mianmar, faz fronteira com Bangladesh, Índia, China, Laos e Tailândia.',
    },
    {
      src: 'assets/local3.jpg',
      id: 'lc3',
      alt: 'Dolomitas - Itália',
      bnd: 'assets/italy.svg',
      desc: 'As Dolomitas são uma espetacular cadeia montanhosa localizada no norte da Itália, entre as regiões do Vêneto, Trentino-Alto Ádige e Friuli-Venezia Giulia. Conhecidas por suas impressionantes formações rochosas e picos dramáticos, as Dolomitas fazem parte dos Alpes Italianos e foram declaradas Patrimônio Mundial da UNESCO em 2009.',
    },
    {
      src: 'assets/local4.jpg',
      id: 'lc4',
      alt: 'Baía de Ha Long - Vietnã',
      bnd: 'assets/vietnam.png',
      desc: 'A Baía de Ha Long (Ha Long Bay) é um dos destinos naturais mais impressionantes do mundo, localizada no norte do Vietnã, na província de Quang Ninh. Famosa por suas formações rochosas dramáticas e águas esverdeadas, a baía foi declarada Patrimônio Mundial da UNESCO em 1994 e é um dos pontos turísticos mais icônicos do Sudeste Asiático.',
    },
    {
      src: 'assets/local5.jpg',
      id: 'lc5',
      alt: 'Nanga Parbat - Paquistão',
      bnd: 'assets/pakistan.png',
      desc: 'O Nanga Parbat é a nona montanha mais alta do mundo, com 8.126 metros de altitude, localizada no Paquistão, na região de Gilgit-Baltistão. Faz parte da cordilheira do Himalaia e é conhecida por sua beleza impressionante e desafios extremos para alpinistas.',
    },
  ];

  currentIndex = 0;

  changeBackground(newSrc: string, newAlt: string, newDesc: string) {
    this.backimg = newSrc;
    this.localname = newAlt;
    this.localdesc = newDesc;
    console.log('Cback');
  }

  moveRight() {
    console.log('Right' + this.translate);
    if (this.translate > -615) {
      this.translate += -325;
    }
  }

  moveLeft() {
    console.log('Left' + this.translate);
    if (this.translate <= 0) {
      this.translate += 325;
    }
  }
}
