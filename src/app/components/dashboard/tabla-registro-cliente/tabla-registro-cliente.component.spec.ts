import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRegistroClienteComponent } from './tabla-registro-cliente.component';

describe('TablaRegistroClienteComponent', () => {
  let component: TablaRegistroClienteComponent;
  let fixture: ComponentFixture<TablaRegistroClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaRegistroClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaRegistroClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
