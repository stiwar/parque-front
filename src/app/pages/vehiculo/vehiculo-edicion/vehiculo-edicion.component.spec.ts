import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoEdicionComponent } from './vehiculo-edicion.component';

describe('VehiculoEdicionComponent', () => {
  let component: VehiculoEdicionComponent;
  let fixture: ComponentFixture<VehiculoEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
