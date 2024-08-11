import { NgModule } from "@angular/core";
import { BuscaComponent } from "./busca.component";
import { CommonModule } from "@angular/common";
import { CompanhiasComponent } from "./filtros-complementares/companhias/companhias.component";
import { LabelComponent } from "./filtros-complementares/label/label.component";
import { ParadasComponent } from "./filtros-complementares/paradas/paradas.component";
import { PassagemDestaqueComponent } from "./passagem-destaque/passagem-destaque.component";
import { PassagemComponent } from "./passagem/passagem.component";
import { FiltrosComplementaresComponent } from "./filtros-complementares/filtros-complementares.component";
import { PrecosComponent } from "./filtros-complementares/precos/precos.component";
import { SharedModule } from "src/app/shared/shared.module";
import { MaterialModule } from "../core/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { BuscaRoutingModule } from "./busca-routing.module";

@NgModule({
    declarations: [
        BuscaComponent,
        ParadasComponent,
        CompanhiasComponent,
        PrecosComponent,
        LabelComponent,
        FiltrosComplementaresComponent,
        PassagemComponent,
        PassagemDestaqueComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule,
        ReactiveFormsModule,
        BuscaRoutingModule
    ],
    exports: [
        BuscaComponent,
        ParadasComponent,
        CompanhiasComponent,
        PrecosComponent,
        LabelComponent,
        FiltrosComplementaresComponent,
        PassagemComponent,
        PassagemDestaqueComponent
    ]
})
export class BuscaModule {
    
}