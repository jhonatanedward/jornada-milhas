import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AutenticacaoInterceptor } from './core/interceptors/autenticacao.interceptor';
import { BuscaComponent } from './pages/busca/busca.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './core/material/material.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    PerfilComponent,
    BuscaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    HomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,  
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AutenticacaoInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
