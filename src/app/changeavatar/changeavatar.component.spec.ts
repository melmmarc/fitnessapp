import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeavatarComponent } from './changeavatar.component';
import { of } from 'rxjs';

describe('ChangeavatarComponent', () => {
  let component: ChangeavatarComponent;
  let fixture: ComponentFixture<ChangeavatarComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ChangeavatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeavatarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to menu', () => {
    const spy = spyOn(router, 'navigate');
    component.goToMenu();
    expect(spy).toHaveBeenCalledWith(['/menu'], {
      queryParams: jasmine.objectContaining({
        username: component.username,
        selectedAvatar: component.selectedAvatar,
        language: component.language,
        selectedGoal: component.selectedGoal,
        email: component.selectedEmail,
        password: component.selectedPassword,
        frequency: component.selectedFrequency,
        selectedBG: component.selectedBG
      })
    });
  });

  it('should update background selection', () => {
    component.selectedBG = 'black';
    component.updateBackgroundSelection();
    expect(component.blackBGselected).toBeTrue();
    expect(component.blueBGselected).toBeFalse();
    // Add similar expectations for other background selections
  });

  it('should update avatar and navigate to account', () => {
    spyOn(router, 'navigate');
    component.female2Selected = true;
    component.updateAvatar();
    expect(component.selectedAvatar).toEqual('female2');
    expect(router.navigate).toHaveBeenCalledWith(['/account'], {
      queryParams: jasmine.objectContaining({
        username: component.username,
        selectedAvatar: 'female2',
        // Add other query parameters
      })
    });
  });

  // Add more test cases as needed for other methods and behaviors
});
