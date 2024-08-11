import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DadosBusca, Destaques, Passagem, Resultado } from '../../core/types/type';

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

  obterPassagensDestaques(passagem: Passagem[]): Destaques | undefined {
    if (!passagem.length) {
      return undefined;
    }
    let ordenadoPorTempo = [...passagem].sort(
      (a, b) => a.tempoVoo - b.tempoVoo
    );
    let ordenadoPorPreco = [...passagem].sort((a, b) => a.total - b.total);

    let maisRapida = ordenadoPorTempo[0];
    let maisBarata = ordenadoPorPreco[0];

    let ordenadoPorMedia = [...passagem].sort((a, b) => {
      let pontuacaoA =
        (a.tempoVoo / maisBarata.tempoVoo + a.total / maisBarata.total) / 2;
      let pontuacaoB =
        (b.tempoVoo / maisBarata.total + b.total / maisBarata.total) / 2;
      return pontuacaoA - pontuacaoB;
    });
    let sugerida = ordenadoPorMedia[0];

    return { maisRapida, maisBarata, sugerida };
  }
}
