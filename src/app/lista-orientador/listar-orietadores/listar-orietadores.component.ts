import { OrientadorService } from './../../service/orientador.service';
import { Orientador } from './../../model/orientador.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-orietadores',
  templateUrl: './listar-orietadores.component.html',
  styleUrls: ['./listar-orietadores.component.css']
})
export class ListarOrietadoresComponent implements OnInit {

  ListarOrientadoresComponent: any;
  public orientador: Orientador[];
  constructor(
    private orientadorService: OrientadorService
  ) { }

  ngOnInit() {
    this.orientadorService.getListaOrientador().subscribe((orientadorService) => {
      this.orientador = orientadorService;
      console.log('sucesso!');
    }, () => {
      console.log('Erro!');
    });
  }

  setFiltro(event: any): void {
    this.ListarOrientadoresComponent.setFiltro = event.target.value;
  }
}
