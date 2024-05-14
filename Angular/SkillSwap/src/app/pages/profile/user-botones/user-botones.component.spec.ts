import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBotonesComponent } from './user-botones.component';

describe('UserBotonesComponent', () => {
  let component: UserBotonesComponent;
  let fixture: ComponentFixture<UserBotonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBotonesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
