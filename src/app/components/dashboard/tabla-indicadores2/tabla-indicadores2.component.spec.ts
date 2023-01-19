import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaIndicadores2Component } from './tabla-indicadores2.component';

describe('TablaIndicadores2Component', () => {
  let component: TablaIndicadores2Component;
  let fixture: ComponentFixture<TablaIndicadores2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaIndicadores2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaIndicadores2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
