import { Injectable, OnInit } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';
import { PessoaUsuaria } from '../types/type';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{

  private userSubject = new BehaviorSubject<PessoaUsuaria | null>(null);


  constructor(private tokenService: TokenService) { 
    if(tokenService.possuiToken())
      this.decodificarJWT();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  decodificarJWT() {
    const token = this.tokenService.retornarToken();
    const user = jwtDecode(token) as PessoaUsuaria;

    this.userSubject.next(user);
  }

  retornarUser() {
    return this.userSubject.asObservable();
  }

  salvarToken(token: string) {
    this.tokenService.salvarToken(token);
    this.decodificarJWT();
  }

  logout() {
    this.tokenService.excluirToken();
    this.userSubject.next(null);    
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }

}
