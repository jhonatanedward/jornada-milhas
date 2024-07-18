import { Component, OnInit } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { PassagensService } from 'src/app/core/services/passagens.service';
import { DadosBusca, Passagem } from 'src/app/core/types/type';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit{

  passagens: Passagem[] = [];

  constructor(
    private passagensService: PassagensService,
    private formBuscaService: FormBuscaService) {
  }

  ngOnInit(): void {

    const buscaPadrao = {
      dataIda: new Date().toISOString(),
      pagina: 1,
      porPagina: 500,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: "Executiva"
    }

    const busca = this.formBuscaService.formEstaValido ? this.formBuscaService.obterDadosDeBusca() : buscaPadrao

    this.passagensService.getPassagens(busca).subscribe(
      res => {
        console.log(res)
        this.passagens = res.resultado
      }
    )
  }

  busca(ev: DadosBusca){
    this.passagensService.getPassagens(ev).subscribe(
      res =>{
        this.passagens = res.resultado
    })
  }
  
}