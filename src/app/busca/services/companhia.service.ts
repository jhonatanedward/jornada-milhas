import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Companhia } from '../../core/types/type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanhiaService {
  
  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  lista(): Observable<Companhia[]>{
    return this.httpClient.get<Companhia[]>(`${this.apiUrl}/companhias`)
  }
}
