import { EstagiarioService } from './../service/estagiario.service';
import { Orientador } from './../model/orientador.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-lista-orientador',
  templateUrl: './lista-orientador.component.html',
  styleUrls: ['./lista-orientador.component.css']
})
export class ListaOrientadorComponent implements OnInit {

  orientadorService: any;
  public monitorLink = 'cadastro';
  public orientador: Orientador[];
  constructor(
    private estagiarioService: EstagiarioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.orientadorService.getListaOrientador().subscribe((orientadorServer) => {
      this.orientador = orientadorServer;
      console.log('Sucesso!');
    }, () => {
      console.log('Erro!');
    });
  }
}
