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

