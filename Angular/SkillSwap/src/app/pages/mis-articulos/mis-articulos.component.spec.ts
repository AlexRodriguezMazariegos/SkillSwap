import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisArticulosComponent } from './mis-articulos.component';

describe('MisArticulosComponent', () => {
  let component: MisArticulosComponent;
  let fixture: ComponentFixture<MisArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisArticulosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
