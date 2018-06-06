import { catchError, tap } from 'rxjs/operators';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { Orientador } from './../model/orientador.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OrientadorService {

  private url = 'http://localhost:8080/api/orientador';

  constructor(
    private httpClient: HttpClient
  ) { }

  gravarOrientador(orientador: Orientador): Observable<Orientador> {
    return this.httpClient.post<Orientador>(this.url, orientador);
  }

  getListaOrientador(): Observable<Orientador[]> {
    return this.httpClient.get<Orientador[]>(this.url);
  }
}
