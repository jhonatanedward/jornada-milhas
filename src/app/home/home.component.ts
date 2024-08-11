import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent{

  constructor(
    private router: Router
  ){}
  

  navegarParaBusca(ev: any){
    this.router.navigate(['/busca']);
  }
}
