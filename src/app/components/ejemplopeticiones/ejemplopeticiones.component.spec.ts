import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplopeticionesComponent } from './ejemplopeticiones.component';

describe('EjemplopeticionesComponent', () => {
  let component: EjemplopeticionesComponent;
  let fixture: ComponentFixture<EjemplopeticionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemplopeticionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemplopeticionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
