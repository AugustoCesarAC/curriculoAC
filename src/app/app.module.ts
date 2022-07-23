import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ResumoComponent } from './resumo/resumo.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { MeusProjetosComponent } from './meus-projetos/meus-projetos.component';
import { LinguagensUsadasComponent } from './linguagens-usadas/linguagens-usadas.component';
import { CompetenciasComponent } from './competencias/competencias.component';
import { RodapeComponent } from './rodape/rodape.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { AppRoutingModule } from './app-routing.module';
import { ContatoComponent } from './contato/contato.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ResumoComponent,
    SobreMimComponent,
    MeusProjetosComponent,
    LinguagensUsadasComponent,
    CompetenciasComponent,
    RodapeComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
