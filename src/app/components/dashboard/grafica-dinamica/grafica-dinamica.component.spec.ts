import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaDinamicaComponent } from './grafica-dinamica.component';

describe('GraficaDinamicaComponent', () => {
  let component: GraficaDinamicaComponent;
  let fixture: ComponentFixture<GraficaDinamicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaDinamicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaDinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
