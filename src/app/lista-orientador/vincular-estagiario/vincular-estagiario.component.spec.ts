import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VincularEstagiarioComponent } from './vincular-estagiario.component';

describe('VincularEstagiarioComponent', () => {
  let component: VincularEstagiarioComponent;
  let fixture: ComponentFixture<VincularEstagiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VincularEstagiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VincularEstagiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
