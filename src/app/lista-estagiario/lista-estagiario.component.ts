import { Component, OnInit } from '@angular/core';
import { EstagiarioService } from '../service/estagiario.service';
import { Estagiario } from '../model/estagiario.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-estagiario',
  templateUrl: './lista-estagiario.component.html',
  styleUrls: ['./lista-estagiario.component.css']
})
export class ListaEstagiarioComponent implements OnInit {
  public monitorLink = 'cadastro';
  public estagiarios: Estagiario[];
  constructor(
    private estagiarioService: EstagiarioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.estagiarioService.getListaEstagiarios().subscribe((estagiariosServer) => {
      this.estagiarios = estagiariosServer;
      console.log('Sucesso!');
    }, () => {
      console.log('Erro!');
    });
  }

}
