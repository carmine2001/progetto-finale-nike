import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuoviArriviComponent } from './nuovi-arrivi.component';
import { HeaderModule } from '../../components/header/header.module';
import { CardProdottoModule } from '../../components/card-prodotto/card-prodotto.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NuoviArriviComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    CardProdottoModule,
    RouterModule.forChild([
      {
        path: "",
        component: NuoviArriviComponent
      }
    ])
  ]
})
export class NuoviArriviModule { }
