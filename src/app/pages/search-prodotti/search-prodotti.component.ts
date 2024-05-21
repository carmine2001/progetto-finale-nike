import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScarpeService } from '../../services/scarpe.service';
import { IScarpa } from '../../shared/interface/scarpa.model.interface';

@Component({
  selector: 'app-search-prodotti',
  templateUrl: './search-prodotti.component.html',
  styleUrl: './search-prodotti.component.css'
})
export class SearchProdottiComponent {

  prodottiFiltered:IScarpa[]

  constructor(private activatedRoute:ActivatedRoute, private prodottiService:ScarpeService){
    this.activatedRoute.params.subscribe((params) => {
      this.prodottiService.getProdottyBySearchValue(params.value).subscribe((filtered) => {
        this.prodottiFiltered = filtered;
      })
    })
  }

}
