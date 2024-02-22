import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { MenuComponent } from './menu.component';
import { HeaderComponent } from '../header/header.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MenuComponent,
        HeaderComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component properties from query parameters', () => {
    const queryParams = {
      username: 'testUser',
      selectedAvatar: 'avatar.png',
      language: 'de',
      selectedGoal: 'fitness',
      email: 'test@example.com',
      password: 'test123',
      frequency: 'daily',
      selectedBG: 'blue'
    };



    component.ngOnInit();

    expect(component.username).toEqual('testUser');
    expect(component.selectedAvatar).toEqual('avatar.png');
    expect(component.language).toEqual('de');
    expect(component.selectedGoal).toEqual('fitness');
    expect(component.selectedEmail).toEqual('test@example.com');
    expect(component.selectedPassword).toEqual('test123');
    expect(component.selectedFrequency).toEqual('daily');
    expect(component.selectedBG).toEqual('blue');
  });

  it('should navigate to location page with correct query params', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.goToLocation();
    expect(navigateSpy).toHaveBeenCalledWith(['/location'], {
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

});

