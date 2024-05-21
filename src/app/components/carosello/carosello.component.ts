import { Component, Input } from '@angular/core';
import { IScarpa } from '../../shared/interface/scarpa.model.interface';

@Component({
  selector: 'app-carosello',
  templateUrl: './carosello.component.html',
  styleUrl: './carosello.component.css'
})
export class CaroselloComponent {

  @Input() prodotti:IScarpa[];

  constructor(){}

}
