import { Component } from '@angular/core';
import { IWork } from '../../core/models/work.interface';
import { WorkCardComponent } from '../../shared/components/work-card/work-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [WorkCardComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  works: IWork[] = [
    {
      type: 'verdes',
      title: 'Proyectos Verdes 1',
      description: 'Proyectos Verdes 1',
      image: '../../../assets/images/Placeholder_view_vector.svg',
      tag: 'Tag 1'
    },
    {
      type: 'verdes',
      title: 'Proyectos Verdes 2',
      description: 'Proyectos Verdes 2',
      image: '../../../assets/images/Placeholder_view_vector.svg',
      tag: 'Tag 2'
    },
    {
      type: 'amarillos',
      title: 'Proyectos Amarillos 1',
      description: 'Proyectos Amarillos 1',
      image: '../../../assets/images/Placeholder_view_vector.svg',
      tag: 'Tag 3'
    },
    {
      type: 'amarillos',
      title: 'Proyectos Amarillos 2',
      description: 'Proyectos Amarillos 2',
      image: '../../../assets/images/Placeholder_view_vector.svg',
      tag: 'Tag 4'
    },
    {
      type: 'rojos',
      title: 'Proyectos Rojos 1',
      description: 'Proyectos Rojos 1',
      image: '../../../assets/images/Placeholder_view_vector.svg',
      tag: 'Tag 5'
    },
    {
      type: 'rojos',
      title: 'Proyectos Rojos 2',
      description: 'Proyectos Rojos 2',
      image: '../../../assets/images/Placeholder_view_vector.svg',
      tag: 'Tag 6'
    },
  ]

  currentWorks: IWork[] = this.works

  onTypeChange(type: string) {
    console.log(type);

    if (type === 'all') {
      this.currentWorks = this.works;
    } else {
      this.currentWorks = this.works.filter(work => work.type === type);
    }

  }

  constructor() {}

}
