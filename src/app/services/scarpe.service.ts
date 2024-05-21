import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IScarpa } from '../shared/interface/scarpa.model.interface';
import { Observable } from 'rxjs';
import { IProdottoCarrello } from '../shared/interface/prodotto-carrello.model';

@Injectable({
  providedIn: 'root'
})
export class ScarpeService {

  arrayCarrello:IProdottoCarrello[] = [];

  private apiURL:string = "http://localhost:3000/prodotti";

  constructor(private http:HttpClient) { }

  getAllScarpe():Observable<IScarpa[]>{
    return this.http.get<IScarpa[]>(this.apiURL);
  }

  getProdottyBySearchValue(value:string):Observable<IScarpa[]>{
    return this.http.get<IScarpa[]>(`${this.apiURL}?q=${value}`);
  }

  getProdottiByCategory(categoria:string):Observable<IScarpa[]>{
    return this.http.get<IScarpa[]>(`${this.apiURL}?categoria=${categoria}`);
  }

  getProdottoById(id:number):Observable<IScarpa>{
    return this.http.get<IScarpa>(`${this.apiURL}/${id}`);
  }
}
