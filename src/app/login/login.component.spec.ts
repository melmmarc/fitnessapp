import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { HeaderComponent } from '../header/header.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ RouterTestingModule,
        LoginComponent,
         ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
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
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
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

  it('should navigate to home page with correct query params', () => {
    const navigateSpy = spyOn(component.router, 'navigate');
    component.goToHome();
    expect(navigateSpy).toHaveBeenCalledWith(['/home'], {
      queryParams: {
        username: 'testUser',
        selectedAvatar: 'avatar.png',
        language: 'de',
        selectedGoal: 'fitness',
        selectedEmail: 'test@example.com',
        selectedPassword: 'test123',
        selectedFrequency: 'daily',
        selectedBG: 'blue',
      }
    });
  });

  it('should navigate to menu page with correct query params', () => {
    const navigateSpy = spyOn(component.router, 'navigate');
    component.goToMenu();
    expect(navigateSpy).toHaveBeenCalledWith(['/menu'], {
      queryParams: {
        username: 'testUser',
        selectedAvatar: 'avatar.png',
        language: 'de',
        selectedGoal: 'fitness',
        selectedEmail: 'test@example.com',
        selectedPassword: 'test123',
        selectedFrequency: 'daily',
        selectedBG: 'blue',
      }
    });
  });
});
