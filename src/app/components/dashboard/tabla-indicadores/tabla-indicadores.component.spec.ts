import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaIndicadoresComponent } from './tabla-indicadores.component';

describe('TablaIndicadoresComponent', () => {
  let component: TablaIndicadoresComponent;
  let fixture: ComponentFixture<TablaIndicadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaIndicadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaIndicadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
