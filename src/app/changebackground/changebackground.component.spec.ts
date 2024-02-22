import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangebackgroundComponent } from './changebackground.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

describe('ChangebackgroundComponent', () => {
  let component: ChangebackgroundComponent;
  let fixture: ComponentFixture<ChangebackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangebackgroundComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangebackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set default values on initialization', () => {
    expect(component.language).toEqual('de');
    // Add more expectations for other default values if necessary
  });

  it('should navigate to menu', () => {
    const routerSpy = spyOn(component['router'], 'navigate');
    component.goToMenu();
    expect(routerSpy).toHaveBeenCalledWith(['/menu'], {
      queryParams: {
        username: component.username,
        selectedAvatar: component.selectedAvatar,
        language: component.language,
        selectedGoal: component.selectedGoal,
        email: component.selectedEmail,
        password: component.selectedPassword,
        frequency: component.selectedFrequency,
        selectedBG: component.selectedBG,
      },
    });
  });

  // Add more tests for other component methods if necessary
});
