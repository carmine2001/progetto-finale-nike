import { Component } from '@angular/core';
import { ScarpeService } from '../../services/scarpe.service';
import { map } from 'rxjs';
import { IScarpa } from '../../shared/interface/scarpa.model.interface';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.css'
})
export class BestSellerComponent {

  prodottiBestSeller:IScarpa[];

  constructor(private prodottiService: ScarpeService){
    this.prodottiService.getAllScarpe().pipe(
      map((prodotti=> {
        prodotti = prodotti.filter((prodotto)=>prodotto.best_seller >= 4)
        return prodotti
      }
    ))
    ).subscribe((prodotti) => this.prodottiBestSeller = prodotti
  );
    
  }

}
