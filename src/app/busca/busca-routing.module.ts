import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BuscaComponent } from "./busca.component";

const ROUTES: Routes = [
    {
        path: '',
        component: BuscaComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class BuscaRoutingModule {

}