import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PessoaUsuaria } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  cadastrar(pessoaUsuaria: PessoaUsuaria): Observable<PessoaUsuaria> {
    return this.httpClient.post<PessoaUsuaria>(`${this.apiUrl}/auth/cadastro`, pessoaUsuaria);
  }

  buscarCadastro(token: String): Observable<PessoaUsuaria> {
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`
    })
    return this.httpClient.get<PessoaUsuaria> (`${this.apiUrl}/auth/perfil`, {headers});
  }

  editarCadastro(pessoaUsuaria: PessoaUsuaria, token: string): 
    Observable<PessoaUsuaria> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })

    return this.httpClient.patch<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`, 
        pessoaUsuaria, { headers });
  }
}