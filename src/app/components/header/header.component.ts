import { Component, Input } from '@angular/core';
import { IScarpa } from '../../shared/interface/scarpa.model.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router:Router){}

  @Input() prodotto:IScarpa;

  searchForm:FormGroup = new FormGroup({
    search: new FormControl("")
  })

  onSearch(){
    this.router.navigate(["search-prodotti", this.searchForm.get("search").value])
  }

  onNavigate(route:string){
    this.router.navigate([route]);
  }

}
