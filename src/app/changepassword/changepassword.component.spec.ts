import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Params, convertToParamMap } from '@angular/router';
import { ChangepasswordComponent } from './changepassword.component';

describe('ChangepasswordComponent', () => {
  let component: ChangepasswordComponent;
  let fixture: ComponentFixture<ChangepasswordComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ChangepasswordComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordComponent);
    component = fixture.componentInstance;

    // Mock ActivatedRoute
    const mockParams: Params = {
      username: 'testuser',
      selectedAvatar: 'avatar1',
      language: 'de',
      selectedGoal: 'goal1',
      email: 'test@example.com',
      password: 'oldPassword',
      frequency: 'daily',
      selectedBG: 'blue'
    };
    const mockActivatedRoute = {
      snapshot: {
        queryParams: mockParams
      },
      queryParams: {
        subscribe: (fn: (value: Params) => void) => fn(mockParams)
      }
    };
    TestBed.overrideProvider(ActivatedRoute, { useValue: mockActivatedRoute });

    spyOn(component['router'], 'navigate').and.stub(); 

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update background selection based on selectedBG', () => {
    component.updateBackgroundSelection();
    expect(component.blueBGselected).toBeTrue();
    expect(component.blackBGselected).toBeFalse();
    expect(component.orangeBGselected).toBeFalse();
    expect(component.schalkeBGselected).toBeFalse();
    expect(component.dortmundBGselected).toBeFalse();
    expect(component.bayernBGselected).toBeFalse();

    component.selectedBG = 'black';
    component.updateBackgroundSelection();
    expect(component.blackBGselected).toBeTrue();
  });

  it('should navigate to menu with correct query params', () => {
    component.goToMenu();
    expect(component['router'].navigate).toHaveBeenCalledWith(['/menu'], {
      queryParams: {
        username: 'testuser',
        selectedAvatar: 'avatar1',
        language: 'de',
        selectedGoal: 'goal1',
        email: 'test@example.com',
        password: 'oldPassword',
        frequency: 'daily',
        selectedBG: 'blue'
      }
    });
  });

});
