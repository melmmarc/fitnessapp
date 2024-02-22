import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to account on button click', () => {
    spyOn(component, 'goToAccount' as never); // Explicitly define the type of the method
    const button = fixture.nativeElement.querySelector('.go-to-account-button'); // Select the button by its class
    button.click(); // Simulate a button click
    expect(component.goToAccount).toHaveBeenCalled(); // Expect the goToAccount method to have been called
  });

  it('should log out when logout button is clicked', () => {
    spyOn(component, 'logOutDE' as never); // Explicitly define the type of the method
    const button = fixture.nativeElement.querySelector('.logout-button'); // Select the button by its class
    button.click(); // Simulate a button click
    expect(component.logOutDE).toHaveBeenCalled(); // Expect the logOutDE method to have been called
  });

  // Add more test cases as needed
});
