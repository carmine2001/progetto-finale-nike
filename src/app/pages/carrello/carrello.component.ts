import { Component } from '@angular/core';
import { ScarpeService } from '../../services/scarpe.service';
import { IProdottoCarrello } from '../../shared/interface/prodotto-carrello.model';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.css'
})
export class CarrelloComponent {

  arrayCarrello:IProdottoCarrello[];
  totale:number = 0;

  constructor(private prodottiService:ScarpeService){
    this.arrayCarrello = this.prodottiService.arrayCarrello

    this.arrayCarrello.forEach((element)=>{
      this.totale+=element.prezzo;
    })

    this.totale = +this.totale.toFixed(2);

    }

    onDelete(productSelected){
      this.arrayCarrello.forEach((element,i) => {
        if(element.colore_scelto === productSelected.colore_scelto && element.id === productSelected.id && element.taglia_selezionata === productSelected.taglia_selezionata){
          this.arrayCarrello.splice(i,1);
        }
      });
    }

  }
