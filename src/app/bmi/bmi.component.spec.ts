import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { BmiComponent } from './bmi.component';
import { of } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';

describe('BmiComponent', () => {
  let component: BmiComponent;
  let fixture: ComponentFixture<BmiComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BmiComponent,
        HeaderComponent],
        imports: [FormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of(convertToParamMap({
              username: 'testUser',
              selectedAvatar: 'avatar.png',
              language: 'de',
              selectedGoal: 'fitness',
              email: 'test@example.com',
              password: 'test123',
              frequency: 'daily',
              selectedBG: 'blue'
            }))
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate BMI correctly', () => {
    component.height = 180;
    component.weight = 80;
    component.calculateBMI();
    expect(component.bmi).toBeCloseTo(24.69, 2);
  });

  it('should get BMI category correctly', () => {
    expect(component.getBMICategory(15)).toBe('Kritisches Untergewicht');
    expect(component.getBMICategory(16.5)).toBe('Untergewicht');
    expect(component.getBMICategory(20)).toBe('Normalgewicht');
    expect(component.getBMICategory(27)).toBe('Leichtes Übergewicht');
    expect(component.getBMICategory(30)).toBe('Übergewicht');
  });

});

