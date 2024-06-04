import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeselectorComponent } from './themeselector.component';

describe('ThemeselectorComponent', () => {
  let component: ThemeselectorComponent;
  let fixture: ComponentFixture<ThemeselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeselectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
