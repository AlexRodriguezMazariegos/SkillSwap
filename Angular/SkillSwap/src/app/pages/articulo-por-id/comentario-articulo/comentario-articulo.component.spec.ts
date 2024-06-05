import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioArticuloComponent } from './comentario-articulo.component';

describe('ComentarioArticuloComponent', () => {
  let component: ComentarioArticuloComponent;
  let fixture: ComponentFixture<ComentarioArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentarioArticuloComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComentarioArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
