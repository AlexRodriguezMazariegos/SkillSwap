import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarArticulosComponent } from './buscar-articulos.component';

describe('BuscarArticulosComponent', () => {
  let component: BuscarArticulosComponent;
  let fixture: ComponentFixture<BuscarArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarArticulosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
