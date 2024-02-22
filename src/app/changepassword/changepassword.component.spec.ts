import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangepasswordComponent } from './changepassword.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { of } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms'; 

describe('ChangepasswordComponent', () => {
  let component: ChangepasswordComponent;
  let fixture: ComponentFixture<ChangepasswordComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangepasswordComponent,
        HeaderComponent],
      imports: [RouterTestingModule,
        FormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({
              username: 'testUser',
              selectedAvatar: 'avatar.png',
              language: 'de',
              selectedGoal: 'fitness',
              email: 'test@example.com',
              password: 'test123',
              frequency: 'daily',
              selectedBG: 'blue'
            })
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component properties from query parameters', () => {
    expect(component.username).toEqual('testUser');
    expect(component.selectedAvatar).toEqual('avatar.png');
    expect(component.language).toEqual('de');
    expect(component.selectedGoal).toEqual('fitness');
    expect(component.selectedEmail).toEqual('test@example.com');
    expect(component.selectedPassword).toEqual('test123');
    expect(component.selectedFrequency).toEqual('daily');
    expect(component.selectedBG).toEqual('blue');
  });

  it('should update background selection based on selectedBG', () => {
    component.selectedBG = 'black';
    component.updateBackgroundSelection();
    expect(component.blackBGselected).toBe(true);
    expect(component.orangeBGselected).toBe(false);
  });

  it('should navigate to account page after changing password', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.newPassword = 'newPassword';
    component.confirmPassword = 'newPassword';
    component.changePassword();
    expect(component.selectedPassword).toEqual('newPassword');
    expect(navigateSpy).toHaveBeenCalledWith(['/account'], {
      queryParams: {
        username: 'testUser',
        selectedAvatar: 'avatar.png',
        language: 'de',
        selectedGoal: 'fitness',
        email: 'test@example.com',
        password: 'newPassword',
        frequency: 'daily',
        selectedBG: 'blue',
      }
    });
  });

  it('should show alert if new password and confirm password do not match', () => {
    const alertSpy = spyOn(window, 'alert');
    component.newPassword = 'newPassword';
    component.confirmPassword = 'wrongPassword';
    component.changePassword();
    expect(alertSpy).toHaveBeenCalledWith('Die eingegebenen Passwörter stimmen nicht überein.');
    expect(component.selectedPassword).toEqual('test123');
  });

  // Add more tests for other methods as needed

});
