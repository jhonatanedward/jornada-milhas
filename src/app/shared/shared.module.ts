import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { FormBaseComponent } from "./form-base/form-base.component";
import { SeletorPassageiroComponent } from "./seletor-passageiro/seletor-passageiro.component";
import { DropdownUfComponent } from "./dropdown-uf/dropdown-uf.component";
import { BotaoControleComponent } from "./botao-controle/botao-controle.component";
import { ModalComponent } from "./modal/modal.component";
import { FormBuscaComponent } from "./form-busca/form-busca.component";
import { CardDepoimentoComponent } from "./card-depoimento/card-depoimento.component";
import { CardBuscaComponent } from "./card-busca/card-busca.component";
import { ContainerComponent } from "./container/container.component";
import { CardComponent } from "./card/card.component";
import { BannerComponent } from "./banner/banner.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MaterialModule } from "../core/material/material.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        BannerComponent,
        CardComponent,
        ContainerComponent,
        CardBuscaComponent,
        CardDepoimentoComponent,
        FormBuscaComponent,
        ModalComponent,
        BotaoControleComponent,
        DropdownUfComponent,
        SeletorPassageiroComponent,
        FormBaseComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        BannerComponent,
        CardComponent,
        ContainerComponent,
        CardBuscaComponent,
        CardDepoimentoComponent,
        FormBuscaComponent,
        ModalComponent,
        BotaoControleComponent,
        DropdownUfComponent,
        SeletorPassageiroComponent,
        FormBaseComponent
    ]
})
export class SharedModule {

}