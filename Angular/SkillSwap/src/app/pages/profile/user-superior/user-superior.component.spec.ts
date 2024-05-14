import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSuperiorComponent } from './user-superior.component';

describe('UserSuperiorComponent', () => {
  let component: UserSuperiorComponent;
  let fixture: ComponentFixture<UserSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSuperiorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
