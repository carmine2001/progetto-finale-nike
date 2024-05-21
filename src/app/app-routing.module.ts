import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: () => import("./pages/home-page/home-page.module").then(m => m.HomePageModule)
  },
  {
    path: "tutti-prodotti",
    loadChildren: () => import("./pages/tutti-prodotti/tutti-prodotti.module").then(m => m.TuttiProdottiModule)
  },
  {
    path: "tutti-prodotti/:value",
    loadChildren: () => import("./pages/tutti-prodotti/tutti-prodotti.module").then(m => m.TuttiProdottiModule)
  },
  {
    path: "search-prodotti/:value",
    loadChildren: () => import("./pages/search-prodotti/search-prodotti.module").then(m => m.SearchProdottiModule)
  },
  {
    path: "nuovi-arrivi",
    loadChildren: () => import("./pages/nuovi-arrivi/nuovi-arrivi.module").then(m => m.NuoviArriviModule)
  },
  {
    path: "best-seller",
    loadChildren: () => import("./pages/best-seller/best-seller.module").then(m => m.BestSellerModule)
  },
  {
    path: "scopri-lo-sport/:category",
    loadChildren: () => import("./pages/scopri-sport/scopri-sport.module").then(m => m.ScopriSportModule)
  },
  {
    path: "details/:id",
    loadChildren: () => import("./pages/details/details.module").then(m => m.DetailsModule)
  },
  {
    path: "carrello",
    loadChildren: () => import("./pages/carrello/carrello.module").then(m => m.CarrelloModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
