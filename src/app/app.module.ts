import { OrientadorService } from './service/orientador.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListaEstagiarioComponent } from './lista-estagiario/lista-estagiario.component';
import { CadastroEstagiarioComponent } from './lista-estagiario/cadastro-estagiario/cadastro-estagiario.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  // <-- #1 import module
import { EstagiarioService } from './service/estagiario.service';
import { HttpClient, HttpHandler  } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ListarOsEstagariosComponent } from './lista-estagiario/listar-os-estagarios/listar-os-estagarios.component';
import { ListaOrientadorComponent } from './lista-orientador/lista-orientador.component';
import { CadastroOrientadorComponent } from './lista-orientador/cadastro-orientador/cadastro-orientador.component';
import { ListarOrietadoresComponent } from './lista-orientador/listar-orietadores/listar-orietadores.component';
import { FooterComponent } from './footer/footer.component';
import { VincularEstagiarioComponent } from './lista-orientador/vincular-estagiario/vincular-estagiario.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaEstagiarioComponent,
    CadastroEstagiarioComponent,
    ListarOsEstagariosComponent,
    ListaOrientadorComponent,
    CadastroOrientadorComponent,
    ListarOrietadoresComponent,
    FooterComponent,
    VincularEstagiarioComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [EstagiarioService, HttpClient, OrientadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
