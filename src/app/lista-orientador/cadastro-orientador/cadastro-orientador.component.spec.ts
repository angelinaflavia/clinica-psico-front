import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroOrientadorComponent } from './cadastro-orientador.component';

describe('CadastroOrientadorComponent', () => {
  let component: CadastroOrientadorComponent;
  let fixture: ComponentFixture<CadastroOrientadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroOrientadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroOrientadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
