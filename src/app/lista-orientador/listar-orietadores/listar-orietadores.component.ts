import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-orietadores',
  templateUrl: './listar-orietadores.component.html',
  styleUrls: ['./listar-orietadores.component.css']
})
export class ListarOrietadoresComponent implements OnInit {

  ListarOrientadoresComponent: any;
  constructor() { }

  ngOnInit() {
  }
  setFiltro(event: any): void {
    this.ListarOrientadoresComponent.setFiltro = event.target.value;
  }
}
