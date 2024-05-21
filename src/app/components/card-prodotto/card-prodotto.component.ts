import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IScarpa } from '../../shared/interface/scarpa.model.interface';

@Component({
  selector: 'app-card-prodotto',
  templateUrl: './card-prodotto.component.html',
  styleUrl: './card-prodotto.component.css'
})
export class CardProdottoComponent {

  @Input() prodotto:IScarpa;
  @Output() emitId:EventEmitter<number> = new EventEmitter();

  goDetails(){
    this.emitId.emit(this.prodotto.id);
  }
}
