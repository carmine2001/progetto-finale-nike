import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuttiProdottiComponent } from './tutti-prodotti.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../components/header/header.module';
import { CardProdottoModule } from '../../components/card-prodotto/card-prodotto.module';
import { AccordionFiltriModule } from '../../components/accordion-filtri/accordion-filtri.module';



@NgModule({
  declarations: [
    TuttiProdottiComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    CardProdottoModule,
    AccordionFiltriModule,
    RouterModule.forChild([
      {
        path: "",
        component:  TuttiProdottiComponent
      }
    ])
  ]
})
export class TuttiProdottiModule { }
