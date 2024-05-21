import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScopriSportComponent } from './scopri-sport.component';
import { CardProdottoModule } from '../../components/card-prodotto/card-prodotto.module';
import { HeaderModule } from '../../components/header/header.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ScopriSportComponent
  ],
  imports: [
    CommonModule,
    CardProdottoModule,
    HeaderModule,
    RouterModule.forChild([
      {
        path: "",
        component: ScopriSportComponent
      }
    ])
  ]
})
export class ScopriSportModule { }
