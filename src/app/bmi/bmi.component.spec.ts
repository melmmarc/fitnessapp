import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { BmiComponent } from './bmi.component';

describe('BmiComponent', () => {
  let component: BmiComponent;
  let fixture: ComponentFixture<BmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BmiComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: convertToParamMap({
                username: 'testUser',
                selectedAvatar: 'avatar1',
                language: 'de',
                selectedGoal: 'loseWeight',
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
    fixture = TestBed.createComponent(BmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update background selection', () => {
    component.updateBackgroundSelection();
    expect(component.blueBGselected).toBe(true);
    expect(component.blackBGselected).toBe(false);
    expect(component.orangeBGselected).toBe(false);
    expect(component.schalkeBGselected).toBe(false);
    expect(component.dortmundBGselected).toBe(false);
    expect(component.bayernBGselected).toBe(false);
  });

  it('should calculate BMI', () => {
    component.height = 180;
    component.weight = 80;
    component.calculateBMI();
    expect(component.bmi).toBeCloseTo(24.69, 2);
  });

  it('should calculate daily calorie intake in German', () => {
    component.language = 'de';
    component.age = 30;
    component.gender = 'male';
    component.weight = 80;
    component.height = 180;
    component.activityLevel = 'normal';
    component.calculateDailyCalorieIntake();
    expect(component.dailyCalorieIntake).toBeCloseTo(2480, 0);
  });

  it('should calculate daily calorie intake in English', () => {
    component.language = 'en';
    component.age = 30;
    component.gender = 'male';
    component.weight = 80;
    component.height = 180;
    component.activityLevel = 'normal';
    component.calculateDailyCalorieIntake();
    expect(component.dailyCalorieIntake).toBeCloseTo(2983, 0);
  });

  // Add more test cases as needed
});

