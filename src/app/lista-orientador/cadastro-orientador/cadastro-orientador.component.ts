import { Orientador } from './../../model/orientador.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, Validators } from '@angular/forms';
import { OrientadorService } from '../../service/orientador.service';

@Component({
  selector: 'app-cadastro-orientador',
  templateUrl: './cadastro-orientador.component.html',
  styleUrls: ['./cadastro-orientador.component.css']
})
export class CadastroOrientadorComponent implements OnInit {

  @ViewChild(FormGroupDirective)
  form: FormGroupDirective;
  // 2º Passo
  formulario: FormGroup;

  public orientador: Orientador = new Orientador();

  // 3º Passo: Adicionar o formBuilder
  constructor(
    private orientadorService: OrientadorService,
    private formBuilder: FormBuilder
   ) {

  }

   // 2º Passo
   ngOnInit() {
    this.formulario = this.formBuilder.group({
      matricula: ['', Validators.required],
      nomeCompleto: [''],
      telefone: [null],
      celular: [null],
      email: [null, Validators.email],
      turno: [null],
      periodo: [null],
      tipoEstagio: [null],
    });
  }

  setMatricula(event: any): void {
    this.orientador.matricula = event.target.value;
  }

  setNomeCompleto(event: any): void {
    this.orientador.nomeCompleto = event.target.value;
  }

  setTelefone(event: any): void {
    this.orientador.telefoneResidencial = event.target.value;
  }

  setCelular(event: any): void {
    this.orientador.celular = event.target.value;
  }

  setEmail(event: any): void {
    this.orientador.email = event.target.value;
  }

  setTitulacao(event: any): void {
    this.orientador.Titulacao = event.target.value;
  }

  setAbordagem(event: any): void {
    this.orientador.Abordagem = event.target.value;
  }

  gravarOrientador(): void {
    console.log(this.formulario.value);
  }

  onSubmit(): void {
    this.orientador = {
      ...this.formulario.value
    };
    console.log(this.formulario);
    if (this.formulario.valid) {
      console.log('formulario valido');
    } else {
      console.log('formulario invalido');
    }

    if (this.formulario.valid) {
      this.orientadorService.gravarOrientador(this.orientador)
                              .subscribe( () => {
                                console.log('Gravado com sucesso');
                              } , () => {
                                console.log('Falhou!');
                              });
    }
  }
  isValidTouched(campo) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }
  cssErro(campo) {
    return {
      'has-error' : this.isValidTouched(campo),
      'has-feedback' : this.isValidTouched(campo)
    };
  }
}


