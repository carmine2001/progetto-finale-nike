import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProdottoCarrello } from '../../shared/interface/prodotto-carrello.model';

@Component({
  selector: 'app-card-carrello',
  templateUrl: './card-carrello.component.html',
  styleUrl: './card-carrello.component.css'
})
export class CardCarrelloComponent implements OnInit {

  @Input() prodotto:IProdottoCarrello;
  @Output() productSelected:EventEmitter<object> = new EventEmitter();
  
  ngOnInit(): void {
    
  }


  deleteProdotto(){
    const objSelezione = {
      id: this.prodotto.id,
      taglia_selezionata: this.prodotto.taglia_selezionata,
      colore_scelto: this.prodotto.colore_scelto
    }
    this.productSelected.emit(objSelezione);
  }
}
