import { Component, OnInit } from '@angular/core';
import { ListaEstagiarioComponent } from './../lista-estagiario/lista-estagiario.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public monitorLink = 'cadastro';
  constructor() { }

  ngOnInit() {
  }

}
