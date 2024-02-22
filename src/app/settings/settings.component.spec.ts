import { HeaderComponent } from '../header/header.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsComponent } from './settings.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { of } from 'rxjs';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsComponent,
        HeaderComponent],
      imports: [RouterTestingModule],
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
    fixture = TestBed.createComponent(SettingsComponent);
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

  it('should navigate to menu page with correct query params', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.goToMenu();
    expect(navigateSpy).toHaveBeenCalledWith(['/menu'], {
      queryParams: {
        username: 'testUser',
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

  it('should navigate to location page with correct query params', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.goToLocation();
    expect(navigateSpy).toHaveBeenCalledWith(['/location'], {
      queryParams: {
        username: 'testUser',
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

  // Add more tests for other methods as needed

});
