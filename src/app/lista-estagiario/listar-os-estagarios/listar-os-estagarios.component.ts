import { EstagiarioService } from './../../service/estagiario.service';
import { Estagiario } from './../../model/estagiario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-os-estagarios',
  templateUrl: './listar-os-estagarios.component.html',
  styleUrls: ['./listar-os-estagarios.component.css']
})
export class ListarOsEstagariosComponent implements OnInit {

  ListarOsEstagariosComponent: any;
  public estagiarios: Estagiario[];
  constructor(
    private estagiarioService: EstagiarioService
  ) { }

  ngOnInit() {
    this.estagiarioService.getListaEstagiarios().subscribe((estagiarioService) => {
      this.estagiarios = estagiarioService;
      console.log('sucesso!');
    }, () => {
      console.log('Erro!');
    });
  }

  setFiltro(event: any): void {
    this.ListarOsEstagariosComponent.setFiltro = event.target.value;
  }
}
