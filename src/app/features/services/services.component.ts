import { Component, ViewChild } from '@angular/core';
import { ServiceCard } from '../../core/models/service-card.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  cards: ServiceCard[] = [
    { 
      title: 'Servicio 1', 
      description: 'Descripción breve del servicio', 
      icon: '../assets/icons/document.svg',
      expanded: false,
      projects: '10 proyectos realizados',
      price: '$500 - $1000',
      duration: '1-2 meses',
      detailedDescription: 'Lorem ipsum abusabdbsuadbau sdajn dkajsn s k sam das, al s dla .asd najsn dnasd askn msasj j saomoc easaks sjajajsd ssdalskdas sadkads ds'
    },
    {
      title: 'Servicio 2',
      description: 'Descripción breve del servicio',
      icon: '../assets/icons/pencil.svg',
      expanded: false,
      projects: '10 proyectos realizados',
      price: '$500 - $1000',
      duration: '1-2 meses',
      detailedDescription: 'Lorem ipsum abusabdbsuadbau sdajn dkajsn s k sam das, al s dla .asd najsn dnasd askn msasj j saomoc easaks sjajajsd ssdalskdas sadkads ds'
    },
    {
      title: 'Servicio 3',
      description: 'Descripción breve del servicio',
      icon: '../assets/icons/play-alt.svg',
      expanded: false,
      projects: '10 proyectos realizados',
      price: '$500 - $1000',
      duration: '1-2 meses',
      detailedDescription: 'Lorem ipsum abusabdbsuadbau sdajn dkajsn s k sam das, al s dla .asd najsn dnasd askn msasj j saomoc easaks sjajajsd ssdalskdas sadkads ds'
    }
  ];
  
  expandCard(index: number): void {
    // Colapsar todas las tarjetas antes de expandir la seleccionada
    this.cards.forEach((card, i) => {
      card.expanded = i === index ? !card.expanded : false;
    });
  }

}
