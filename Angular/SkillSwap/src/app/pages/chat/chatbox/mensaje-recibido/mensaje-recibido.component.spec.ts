import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeRecibidoComponent } from './mensaje-recibido.component';

describe('MensajeRecibidoComponent', () => {
  let component: MensajeRecibidoComponent;
  let fixture: ComponentFixture<MensajeRecibidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajeRecibidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MensajeRecibidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
