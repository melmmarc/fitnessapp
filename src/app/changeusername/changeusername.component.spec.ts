import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeusernameComponent } from './changeusername.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { of } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';

describe('ChangeusernameComponent', () => {
  let component: ChangeusernameComponent;
  let fixture: ComponentFixture<ChangeusernameComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeusernameComponent,
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
    fixture = TestBed.createComponent(ChangeusernameComponent);
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

  it('should navigate to account page after changing username', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.newUsername = 'newUser';
    component.changeUsername();
    expect(component.username).toEqual('newUser');
    expect(navigateSpy).toHaveBeenCalledWith(['/account'], {
      queryParams: {
        username: 'newUser',
        selectedAvatar: 'avatar.png',
        language: 'de',
        selectedGoal: 'fitness',
        email: 'test@example.com',
        password: 'test123',
        frequency: 'daily',
        selectedBG: 'blue',
      }
    });
  });
});
