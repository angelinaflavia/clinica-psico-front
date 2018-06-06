import { CadastroOrientadorComponent } from './lista-orientador/cadastro-orientador/cadastro-orientador.component';
import { CadastroEstagiarioComponent } from './lista-estagiario/cadastro-estagiario/cadastro-estagiario.component';
import { ListarOrietadoresComponent } from './lista-orientador/listar-orietadores/listar-orietadores.component';
import { ListarOsEstagariosComponent } from './lista-estagiario/listar-os-estagarios/listar-os-estagarios.component';
import { ListaOrientadorComponent } from './lista-orientador/lista-orientador.component';
import { ListaEstagiarioComponent } from './lista-estagiario/lista-estagiario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'lista-estagiario', component: ListaEstagiarioComponent},
  {path: 'lista-orientador', component: ListaOrientadorComponent},
  {path: 'listarOrientadores', component: ListarOrietadoresComponent},
  {path: 'listar-os-estagiarios', component: ListarOsEstagariosComponent},
  {path: 'CadastroEstagiario', component: CadastroEstagiarioComponent},
  {path: 'CadastroOrientador', component: CadastroOrientadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})

export class AppRoutingModule { }
