import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Depoimento } from '../../core/types/type';

@Injectable({
  providedIn: 'root'
})
export class DepoimentoService{
  
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Depoimento[]> {
    return this.httpClient.get<Depoimento[]>(`${this.apiUrl}/depoimentos`);
  }

}
