import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeusernameComponent } from './changeusername.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

describe('ChangeusernameComponent', () => {
  let component: ChangeusernameComponent;
  let fixture: ComponentFixture<ChangeusernameComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeusernameComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({
              username: 'testuser',
              selectedAvatar: 'avatar1',
              language: 'en',
              selectedGoal: 'goal1',
              email: 'test@example.com',
              password: 'password123',
              frequency: 'daily',
              selectedBG: 'blue'
            })
          }
        }
      ]
    })
    .compileComponents();
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

  it('should update background selection based on selectedBG value', () => {
    expect(component.blueBGselected).toBeTruthy();
    expect(component.blackBGselected).toBeFalsy();
    expect(component.orangeBGselected).toBeFalsy();
    expect(component.schalkeBGselected).toBeFalsy();
    expect(component.dortmundBGselected).toBeFalsy();
    expect(component.bayernBGselected).toBeFalsy();

    // Simulate change in selectedBG value
    component.selectedBG = 'black';
    component.updateBackgroundSelection();

    expect(component.blueBGselected).toBeFalsy();
    expect(component.blackBGselected).toBeTruthy();
    expect(component.orangeBGselected).toBeFalsy();
    expect(component.schalkeBGselected).toBeFalsy();
    expect(component.dortmundBGselected).toBeFalsy();
    expect(component.bayernBGselected).toBeFalsy();
  });

  it('should navigate to menu page', () => {
    spyOn(router, 'navigate').and.stub();

    component.goToMenu();

    expect(router.navigate).toHaveBeenCalledWith(['/menu'], {
      queryParams: {
        username: 'testuser',
        selectedAvatar: 'avatar1',
        language: 'en',
        selectedGoal: 'goal1',
        email: 'test@example.com',
        password: 'password123',
        frequency: 'daily',
        selectedBG: 'blue'
      }
    });
  });

  // Similarly, write tests for other navigation methods and changeUsername method
});
