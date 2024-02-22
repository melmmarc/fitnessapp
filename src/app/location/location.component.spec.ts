import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationComponent } from './location.component';
import { of } from 'rxjs';
import { HeaderComponent } from '../header/header.component';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationComponent,
        HeaderComponent ],
      imports: [ RouterTestingModule.withRoutes([]) ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    spyOn(router, 'navigate').and.stub();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to menu', () => {
    component.username = 'testUser';
    component.selectedAvatar = 'avatar1';
    component.language = 'en';
    component.selectedGoal = 'lose weight';
    component.selectedEmail = 'test@example.com';
    component.selectedPassword = 'password123';
    component.selectedFrequency = 'daily';
    component.selectedBG = 'blue';
    
    component.goToMenu();

    expect(router.navigate).toHaveBeenCalledWith(['/menu'], {
      queryParams: {
        username: 'testUser',
        selectedAvatar: 'avatar1',
        language: 'en',
        selectedGoal: 'lose weight',
        email: 'test@example.com',
        password: 'password123',
        frequency: 'daily',
        selectedBG: 'blue',
      }
    });
  });

});
