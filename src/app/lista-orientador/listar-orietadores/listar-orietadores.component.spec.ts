import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOrietadoresComponent } from './listar-orietadores.component';

describe('ListarOrietadoresComponent', () => {
  let component: ListarOrietadoresComponent;
  let fixture: ComponentFixture<ListarOrietadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarOrietadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarOrietadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
