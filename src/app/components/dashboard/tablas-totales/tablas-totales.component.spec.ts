import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasTotalesComponent } from './tablas-totales.component';

describe('TablasTotalesComponent', () => {
  let component: TablasTotalesComponent;
  let fixture: ComponentFixture<TablasTotalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablasTotalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablasTotalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
