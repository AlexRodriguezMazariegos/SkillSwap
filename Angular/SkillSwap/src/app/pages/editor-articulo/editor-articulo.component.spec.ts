import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorArticuloComponent } from './editor-articulo.component';

describe('EditorArticuloComponent', () => {
  let component: EditorArticuloComponent;
  let fixture: ComponentFixture<EditorArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorArticuloComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditorArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
