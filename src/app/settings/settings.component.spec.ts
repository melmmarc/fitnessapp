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
    spyOn(component, 'goToAccount' as never); 
    const button = fixture.nativeElement.querySelector('.go-to-account-button'); 
    button.click(); 
    expect(component.goToAccount).toHaveBeenCalled(); 
  });

  it('should log out when logout button is clicked', () => {
    spyOn(component, 'logOutDE' as never); 
    const button = fixture.nativeElement.querySelector('.logout-button'); 
    button.click(); 
    expect(component.logOutDE).toHaveBeenCalled(); 
  });

});
