import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { DadosBusca } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formBusca: FormGroup;

  constructor(public dialog: MatDialog) { 

    const somenteIda = new FormControl(false, [Validators.required])
    const dataVolta =  new FormControl(null, [Validators.required])

    this.formBusca = new FormGroup({
      somenteIda,
      origem: new FormControl(null, [Validators.required]),
      destino: new FormControl(null, [Validators.required]),
      tipo: new FormControl('Econômica'),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
      dataIda: new FormControl(null, [Validators.required]),
      dataVolta
    });

    somenteIda.valueChanges.subscribe((somenteIda) => {
      if(somenteIda){
        dataVolta.disable()
        dataVolta.setValidators(null)
      }else{
        dataVolta.enable()
        dataVolta.setValidators([Validators.required])
      }

      dataVolta.updateValueAndValidity
    })
  }

  trocarOrigemDestino(): void {
    const origem = this.formBusca.get('origem')?.value;
    const destino = this.formBusca.get('destino')?.value;
  
    this.formBusca.patchValue({
      origem: destino,
      destino: origem
    });
  }

  getDescricaoPassageiros (): string {
    
    let descricao = ''

    const adultos = this.formBusca.get('adultos')?.value;
    if (adultos && adultos > 0) {
      descricao += `${adultos} adulto${adultos > 1 ? 's' : ''}`;
    }
  
    const criancas = this.formBusca.get('criancas')?.value;
    if (criancas && criancas > 0) {
      descricao += `${descricao ? ', ' : ''}${criancas} criança${criancas > 1 ? 's' : ''}`;
    }
  
    const bebes = this.formBusca.get('bebes')?.value;
    if (bebes && bebes > 0) {
      descricao += `${descricao ? ', ' : ''}${bebes} bebê${bebes > 1 ? 's' : ''}`;
    }
  
    return descricao
  }

  getFormControlByName<T>(nome:string) : FormControl{
    const formControl = this.formBusca.get(nome);
    if(!formControl) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return formControl as FormControl<T>;
  }

  obterDadosDeBusca() : DadosBusca{

    const dataIdaControl = this.getFormControlByName<Date>('dataIda');
    
    const dadosBusca: DadosBusca = {
      pagina: 1,
      porPagina: 50,
      somenteIda: this.getFormControlByName<boolean>('somenteIda').value,
      origemId: this.getFormControlByName<number>('origem').value.id,
      destinoId: this.getFormControlByName<boolean>('destino').value.id,
      tipo: this.getFormControlByName<string>('tipo').value,
      passageirosAdultos: this.getFormControlByName<number>('adultos').value,
      passageirosCriancas: this.getFormControlByName<number>('criancas').value,
      passageirosBebes: this.getFormControlByName<number>('bebes').value,
      dataIda: dataIdaControl.value.toISOString()
    }

    console.log(dadosBusca)

    const dataVoltaControl = this.getFormControlByName<Date>('dataVolta')
    
    if (dataVoltaControl.value) {
      dadosBusca.dataVolta = dataVoltaControl.value.toISOString();
    }
    return dadosBusca
  }

  openDialog(){
    this.dialog.open(ModalComponent);
  }

  alteraTipo(evento: MatChipSelectionChange, tipo: string){
    if(evento.selected){
      this.formBusca.patchValue({
        tipo
      })

      console.log('Tipo de passagem alterado para: ', tipo )
    }
  }

  get formEstaValido(){
    return this.formBusca.valid;
  }
}
