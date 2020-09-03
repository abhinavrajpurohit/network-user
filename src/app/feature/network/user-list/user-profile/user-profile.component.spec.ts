/**
 |--------------------------------------------------------------
 | User Profile Test Cases!!
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UserProfileComponent } from './user-profile.component';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let userDetails;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // User's DebugElement and element
    let userDe = fixture.debugElement.query(By.css('.profile-details'));
    let userEl = userDe.nativeElement;

    userDetails = {id: 1, email: "george.bluth@reqres.in", first_name: "George", last_name: "Bluth"};

    // simulate the parent setting the input property with that user
    component.userProfile = userDetails;

    // trigger initial data binding
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check user profile', () => {
    expect(component.userProfile).toBe(userDetails);
  });
});
