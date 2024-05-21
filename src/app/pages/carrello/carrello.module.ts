import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrelloComponent } from './carrello.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../components/header/header.module';
import { CardCarrelloModule } from '../../components/card-carrello/card-carrello.module';



@NgModule({
  declarations: [
    CarrelloComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    CardCarrelloModule,
    RouterModule.forChild([
      {
        path: "",
        component: CarrelloComponent
      }
    ])
  ]
})
export class CarrelloModule { }
