import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: convertToParamMap({
                username: 'testUser',
                selectedAvatar: 'avatar.png',
                language: 'en',
                selectedGoal: 'buildMuscles',
                email: 'test@example.com',
                password: 'test123',
                frequency: 'daily',
                selectedBG: 'blue'
              })
            }
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct initial values', () => {
    expect(component.language).toEqual('en');
    expect(component.username).toEqual('testUser');
    expect(component.selectedAvatar).toEqual('avatar.png');
    expect(component.selectedGoal).toEqual('buildMuscles');
    expect(component.selectedEmail).toEqual('test@example.com');
    expect(component.selectedPassword).toEqual('test123');
    expect(component.selectedFrequency).toEqual('daily');
    expect(component.selectedBG).toEqual('blue');
    expect(component.blueBGselected).toBeTrue();
    expect(component.blackBGselected).toBeFalse();
    expect(component.orangeBGselected).toBeFalse();
    expect(component.schalkeBGselected).toBeFalse();
    expect(component.dortmundBGselected).toBeFalse();
    expect(component.bayernBGselected).toBeFalse();
    expect(component.gymday).toBeTrue();
    expect(component.cardioday).toBeFalse();
    expect(component.restday).toBeFalse();
  });
});
