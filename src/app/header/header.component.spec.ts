import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({
              username: 'testUser',
              selectedAvatar: 'avatar.png',
              language: 'en',
              selectedGoal: 'lose weight',
              email: 'test@example.com',
              password: 'testpassword',
              frequency: 'daily',
              selectedBG: 'blue'
            })
          }
        }
      ]
    }).compileComponents();

    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update background selection based on selectedBG', () => {
    component.selectedBG = 'black';
    component.updateBackgroundSelection();
    expect(component.blackBGselected).toBeTrue();
  });

  it('should navigate to menu when logo is clicked', () => {
    spyOn(router, 'navigate');
    component.handleLogoClick();
    expect(router.navigate).toHaveBeenCalledWith(['/menu'], {
      queryParams: {
        username: 'testUser',
        selectedAvatar: 'avatar.png',
        language: 'en',
        selectedGoal: 'lose weight',
        email: 'test@example.com',
        password: 'testpassword',
        frequency: 'daily',
        selectedBG: 'blue'
      }
    });
  });

  it('should navigate to settings when settings icon is clicked', () => {
    spyOn(router, 'navigate');
    component.goToSettings();
    expect(router.navigate).toHaveBeenCalledWith(['/settings'], {
      queryParams: {
        username: 'testUser',
        selectedAvatar: 'avatar.png',
        language: 'en',
        selectedGoal: 'lose weight',
        email: 'test@example.com',
        password: 'testpassword',
        frequency: 'daily',
        selectedBG: 'blue'
      }
    });
  });

  it('should navigate to menu when goToMenu is called', () => {
    spyOn(router, 'navigate');
    component.goToMenu();
    expect(router.navigate).toHaveBeenCalledWith(['/menu'], {
      queryParams: {
        username: 'testUser',
        selectedAvatar: 'avatar.png',
        language: 'en',
        selectedGoal: 'lose weight',
        email: 'test@example.com',
        password: 'testpassword',
        frequency: 'daily',
        selectedBG: 'blue'
      }
    });
  });
});
