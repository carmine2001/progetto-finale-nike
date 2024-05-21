import { Component, OnInit } from '@angular/core';
import { ScarpeService } from '../../services/scarpe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { IScarpa } from '../../shared/interface/scarpa.model.interface';
import { IProdottoCarrello } from '../../shared/interface/prodotto-carrello.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  prodotto:IScarpa;
  selectedTaglia:string;
  selectedColore:string;
  isTrue:boolean = false;
  id:number;
  prodottoCarrello:IProdottoCarrello;
  arrayCarrello:IProdottoCarrello[];
  isTrueAddCarrello:boolean = false;

  constructor(private prodottiService:ScarpeService, private activatedRoute:ActivatedRoute, private router:Router){
    this.activatedRoute.params.pipe(
      switchMap(params => {
        this.id = +params.id;
      return this.prodottiService.getProdottoById(params.id)
      })
    ).subscribe(prodotto => this.prodotto = prodotto);

    this.arrayCarrello = this.prodottiService.arrayCarrello;
  }

  onSelectedTaglia(taglia:string){
    this.selectedTaglia = taglia;
  }

  onSelectedColore(colore:string){
    this.selectedColore = colore
  }

  addCarrello(){
    this.prodottoCarrello = {
      ...this.prodotto,
      taglia_selezionata: this.selectedTaglia,
      colore_scelto: this.selectedColore
    }
    this.isTrue = true;
    if(this.selectedColore && this.selectedTaglia){
      this.isTrueAddCarrello = true;
      this.arrayCarrello.push(this.prodottoCarrello);
      console.log(this.prodottoCarrello);
      
    }
  }

  chiudiBox(){
    this.isTrueAddCarrello = false
  }

  visualizzaCarrello(){
    this.router.navigate(["carrello"])
  }
  
}
