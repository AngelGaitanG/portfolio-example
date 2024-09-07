import { Component, Input } from '@angular/core';
import { IWork } from '../../../core/models/work.interface';

@Component({
  selector: 'app-work-card',
  standalone: true,
  imports: [],
  templateUrl: './work-card.component.html',
  styleUrl: './work-card.component.css'
})
export class WorkCardComponent {
  @Input() card!: IWork;
}
