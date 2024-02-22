import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountComponent } from './account.component';
import { of } from 'rxjs';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AccountComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({
              username: 'testUsername',
              selectedAvatar: 'testAvatar',
              language: 'de',
              selectedGoal: 'testGoal',
              email: 'test@example.com',
              password: 'testPassword',
              frequency: 'testFrequency',
              selectedBG: 'blue'
            })
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update background selection based on selected background', () => {
    expect(component.blueBGselected).toBeTruthy();
    expect(component.blackBGselected).toBeFalsy();
    expect(component.orangeBGselected).toBeFalsy();
    expect(component.schalkeBGselected).toBeFalsy();
    expect(component.dortmundBGselected).toBeFalsy();
    expect(component.bayernBGselected).toBeFalsy();
  });

  it('should switch to German language', () => {
    component.switchToGerman();
    expect(component.language).toEqual('de');
  });

  it('should switch to English language', () => {
    component.switchToEnglish();
    expect(component.language).toEqual('en');
  });

  // Add more tests as needed for other methods and functionalities
});
