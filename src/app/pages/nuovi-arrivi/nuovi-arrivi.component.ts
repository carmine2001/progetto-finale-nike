import { Component } from '@angular/core';
import { ScarpeService } from '../../services/scarpe.service';
import { map } from 'rxjs';
import { IScarpa } from '../../shared/interface/scarpa.model.interface';

@Component({
  selector: 'app-nuovi-arrivi',
  templateUrl: './nuovi-arrivi.component.html',
  styleUrl: './nuovi-arrivi.component.css'
})
export class NuoviArriviComponent {

  prodottiNuoviArrivi:IScarpa[];

  constructor(private prodottiService:ScarpeService){
    this.prodottiService.getAllScarpe().pipe(
      map(prodotti => {
        prodotti = prodotti.filter((prodotto)=>prodotto.nuovo_arrivi)
        return prodotti
      })
    ).subscribe((nuovoArrivo) => this.prodottiNuoviArrivi = nuovoArrivo
    );
    
  }

}
