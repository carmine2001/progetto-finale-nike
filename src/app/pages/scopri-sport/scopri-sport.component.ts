import { Component } from '@angular/core';
import { ScarpeService } from '../../services/scarpe.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { IScarpa } from '../../shared/interface/scarpa.model.interface';

@Component({
  selector: 'app-scopri-sport',
  templateUrl: './scopri-sport.component.html',
  styleUrl: './scopri-sport.component.css'
})
export class ScopriSportComponent {

  prodottiPerCategoria:IScarpa[];

  constructor(private prodottiService:ScarpeService, private activatedRoute:ActivatedRoute){

    this.activatedRoute.params.pipe(
      switchMap((params)=>{
        return this.prodottiService.getProdottiByCategory(params.category)
      })
    ).subscribe((prodotti) => this.prodottiPerCategoria = prodotti);

  }

}
