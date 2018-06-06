import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOsEstagariosComponent } from './listar-os-estagarios.component';

describe('ListarOsEstagariosComponent', () => {
  let component: ListarOsEstagariosComponent;
  let fixture: ComponentFixture<ListarOsEstagariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarOsEstagariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarOsEstagariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
