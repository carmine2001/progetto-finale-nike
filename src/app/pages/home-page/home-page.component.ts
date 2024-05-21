import { Component } from '@angular/core';
import { ScarpeService } from '../../services/scarpe.service';
import { IScarpa } from '../../shared/interface/scarpa.model.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  prodotti:IScarpa[];

  constructor(private prodottiService: ScarpeService){
    this.prodottiService.getAllScarpe().subscribe((prodotti) => {
      this.prodotti = prodotti;
    })
  }
  
}
