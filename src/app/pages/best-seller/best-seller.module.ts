import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSellerComponent } from './best-seller.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../components/header/header.module';
import { CardProdottoModule } from '../../components/card-prodotto/card-prodotto.module';



@NgModule({
  declarations: [
    BestSellerComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    CardProdottoModule,
    RouterModule.forChild([
      {
        path:"",
        component: BestSellerComponent
      }
    ])
  ]
})
export class BestSellerModule { }
