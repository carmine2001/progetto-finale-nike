import { Component } from '@angular/core';
import { IScarpa } from '../../shared/interface/scarpa.model.interface';
import { ScarpeService } from '../../services/scarpe.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutti-prodotti',
  templateUrl: './tutti-prodotti.component.html',
  styleUrl: './tutti-prodotti.component.css'
})
export class TuttiProdottiComponent {

  prodotti:IScarpa[];

  constructor(private prodottiService:ScarpeService, private router:Router){
    this.prodottiService.getAllScarpe().subscribe((prodotti)=>{
      this.prodotti = prodotti;
    })
  }


  onSubmitForm(form:FormGroup){
    setTimeout(()=>{
      for(const key in form.value){
        if(form.value[key]){
          this.prodotti = this.prodotti.filter((prodotto)=>prodotto.categoria === key);
        }
      }
    },0)
    
  }

  onColorAccordion(formColor:FormGroup){
    setTimeout(()=>{
      for(const key in formColor.value){
        if(formColor.value[key]){
          this.prodotti = this.prodotti.filter((prodotto)=>prodotto.colori_disponibili.includes(key))
        }
      }
    },0)
  }

  onSubmitPrice(formPrice:FormGroup){
    setTimeout(()=>{
      if(formPrice.value.inferiore50){
        this.prodotti = this.prodotti.filter((prodotto)=>prodotto.prezzo < 50)
      }
      else if(formPrice.value.da50a100){
        this.prodotti = this.prodotti.filter((prodotto)=>prodotto.prezzo > 50 && prodotto.prezzo < 100)
      }
      else if(formPrice.value.da100a150){
        this.prodotti = this.prodotti.filter((prodotto)=>prodotto.prezzo > 100 && prodotto.prezzo < 150)
      }
      else if(formPrice.value.superiore150){
        this.prodotti = this.prodotti.filter((prodotto)=>prodotto.prezzo > 150)
      }
    },0)
  }

  onClearButton(){
    this.prodottiService.getAllScarpe().subscribe((prodotti)=>{
      this.prodotti = prodotti;
    })
  }

  onGoToDetails(productId:number){
    this.router.navigate(["details",productId]);
  }



}
