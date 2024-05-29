import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjuntarComentarioComponent } from './adjuntar-comentario.component';

describe('AdjuntarComentarioComponent', () => {
  let component: AdjuntarComentarioComponent;
  let fixture: ComponentFixture<AdjuntarComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdjuntarComentarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdjuntarComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
