import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarindicadoresComponent } from './buscarindicadores.component';

describe('BuscarindicadoresComponent', () => {
  let component: BuscarindicadoresComponent;
  let fixture: ComponentFixture<BuscarindicadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarindicadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarindicadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
