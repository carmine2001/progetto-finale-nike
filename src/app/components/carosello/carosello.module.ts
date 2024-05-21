import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaroselloComponent } from './carosello.component';
import { CardProdottoModule } from '../card-prodotto/card-prodotto.module';



@NgModule({
  declarations: [
    CaroselloComponent
  ],
  imports: [
    CommonModule,
    CardProdottoModule
  ],
  exports: [
    CaroselloComponent
  ]
})
export class CaroselloModule {  }
