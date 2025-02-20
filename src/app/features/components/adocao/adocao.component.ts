import { Component } from '@angular/core';
import { CardCatComponent } from "../card-cat/card-cat.component";
import { cats } from "../../../cats";
import { Cat } from '../../../core/models/cat.model';

@Component({
  selector: 'app-adocao',
  standalone: true,
  imports: [CardCatComponent],
  templateUrl: './adocao.component.html',
  styleUrl: './adocao.component.css'
})
export class AdocaoComponent {
  cats = cats;

}
