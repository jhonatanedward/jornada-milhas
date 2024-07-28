import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DadosBusca, Resultado } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class PassagensService {

  apiUrl: string = environment.apiUrl;
  precoMin!: number;
  precoMax!: number;

  constructor(private httpclient: HttpClient) { }

  getPassagens(search: DadosBusca): Observable<Resultado>{
    const params = this.converterParametroString(search);

    const obs = this.httpclient.get<Resultado>(this.apiUrl + '/passagem/search?' + params)

    obs.subscribe(res => {
      this.precoMin = res.precoMin
      this.precoMax = res.precoMax
    })

    return obs
  }

  converterParametroString(busca: DadosBusca){
    const query = Object.entries(busca)
      .map(([key, value]) => {
        if(!value){
        }

        return `${key}=${value}`
      }).join('&');

      return query
  }
}
