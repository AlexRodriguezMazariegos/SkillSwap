import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionEstrellasComponent } from './valoracion-estrellas.component';

describe('ValoracionEstrellasComponent', () => {
  let component: ValoracionEstrellasComponent;
  let fixture: ComponentFixture<ValoracionEstrellasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValoracionEstrellasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValoracionEstrellasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
