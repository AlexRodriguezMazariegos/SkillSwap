import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoEditComponent } from './user-info-edit.component';

describe('UserInfoEditComponent', () => {
  let component: UserInfoEditComponent;
  let fixture: ComponentFixture<UserInfoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInfoEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
