import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchProdottiComponent } from './search-prodotti.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../components/header/header.module';
import { CardProdottoModule } from '../../components/card-prodotto/card-prodotto.module';



@NgModule({
  declarations: [
    SearchProdottiComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    CardProdottoModule,
    RouterModule.forChild([
      {
        path: "",
        component: SearchProdottiComponent
      }
    ])
  ]
})
export class SearchProdottiModule { }
