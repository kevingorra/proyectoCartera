import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSuperComponent } from './tabla-super.component';

describe('TablaSuperComponent', () => {
  let component: TablaSuperComponent;
  let fixture: ComponentFixture<TablaSuperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaSuperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
