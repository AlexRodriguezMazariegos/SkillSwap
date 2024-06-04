import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloPorIdComponent } from './articulo-por-id.component';

describe('ArticuloPorIdComponent', () => {
  let component: ArticuloPorIdComponent;
  let fixture: ComponentFixture<ArticuloPorIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticuloPorIdComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticuloPorIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
