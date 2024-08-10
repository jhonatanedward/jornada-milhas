import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao } from 'src/app/core/types/type';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit {
  
  promocoes: Promocao[] = [];
  
  constructor(private servicoPromocao: PromocaoService){}
  
  ngOnInit(): void {
    this.servicoPromocao.listar()
    .subscribe((resposta)=>{
      this.promocoes = resposta;  
    });
  }

}
