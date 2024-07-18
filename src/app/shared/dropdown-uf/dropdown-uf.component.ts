import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';
import { UnidadeFederativa } from 'src/app/core/types/type';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit{

  @Input() label:string = '';
  @Input() iconePrefixo: string = '';
  @Input() control!: FormControl;
  @Input() placeholder!: string;
  estadosFiltrados!: Observable<UnidadeFederativa[]>;
  unidadesFederativas: UnidadeFederativa[] = [];

  constructor(private unidadeFederativaService: UnidadeFederativaService){ }
  
  ngOnInit(): void {
    this.unidadeFederativaService.listar()
      .subscribe(dados => {
        this.unidadesFederativas = dados;
      });

    this.estadosFiltrados = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string | UnidadeFederativa): UnidadeFederativa[] {
    const nomeUf = typeof value === 'string' ? value : value?.nome;
    const filterValue = nomeUf?.toLowerCase();
    return this.unidadesFederativas.filter(estado => estado.nome.toLowerCase().includes(filterValue));
  }

  displayFn(estado: UnidadeFederativa): string {
    return estado && estado.nome ? estado.nome : '';
  }
  
}