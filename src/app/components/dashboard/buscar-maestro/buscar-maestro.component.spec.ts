import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMaestroComponent } from './buscar-maestro.component';

describe('BuscarMaestroComponent', () => {
  let component: BuscarMaestroComponent;
  let fixture: ComponentFixture<BuscarMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarMaestroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
