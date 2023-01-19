import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPdfComponent } from './registro-pdf.component';

describe('RegistroPdfComponent', () => {
  let component: RegistroPdfComponent;
  let fixture: ComponentFixture<RegistroPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
