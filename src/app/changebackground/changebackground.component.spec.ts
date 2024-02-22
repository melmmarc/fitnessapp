import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangebackgroundComponent } from './changebackground.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

describe('ChangebackgroundComponent', () => {
  let component: ChangebackgroundComponent;
  let fixture: ComponentFixture<ChangebackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangebackgroundComponent,
        HeaderComponent],
      imports: [RouterTestingModule,],
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
    console.log('Initial language value:', component); // Log the initial value
    expect(component.language).toEqual('en');
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

});
