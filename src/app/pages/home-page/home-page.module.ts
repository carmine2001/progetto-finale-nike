import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../components/header/header.module';
import { HeroBannerModule } from '../../components/hero-banner/hero-banner.module';
import { CaroselloModule } from '../../components/carosello/carosello.module';
import { CardProdottoModule } from '../../components/card-prodotto/card-prodotto.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    CaroselloModule,
    HeroBannerModule,
    CardProdottoModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePageComponent
      }
    ])
  ]
})
export class HomePageModule { }
