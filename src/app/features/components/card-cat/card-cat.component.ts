import { Component, input } from '@angular/core';
import { Cat } from '../../../core/models/cat.model';

@Component({
  selector: 'app-card-cat',
  standalone: true,
  imports: [],
  templateUrl: './card-cat.component.html',
  styleUrl: './card-cat.component.css'
})
export class CardCatComponent {
  nome = input.required<string>();
  descricao = input.required<string>();
  imagePath = input.required<string>();
}
