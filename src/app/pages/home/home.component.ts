import { Component, OnInit } from '@angular/core';
import { DepoimentoService } from 'src/app/core/services/depoimento.service';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Depoimento, Promocao } from 'src/app/core/types/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  promocoes: Promocao[] = [];
  depoimentos: Depoimento[] = [];

  constructor(private servicoPromocao: PromocaoService, private servicoDepoimento: DepoimentoService){}
  
  ngOnInit(): void {
    this.servicoPromocao.listar()
    .subscribe((resposta)=>{
      this.promocoes = resposta;  
    });

    this.servicoDepoimento.listar()
    .subscribe((resposta) => {
      this.depoimentos = resposta;
    })
  }
}
