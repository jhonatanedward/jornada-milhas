import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formBusca: FormGroup;

  constructor() { 
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(null),
      destino: new FormControl(null)
    });
  }

  getFormControlByName(nome:string){
    const formControl = this.formBusca.get(nome);
    if(!formControl) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return formControl as FormControl;
  }
}
