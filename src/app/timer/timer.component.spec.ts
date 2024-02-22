import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start timer', fakeAsync(() => {
    component.startTimer();
    expect(component.isRunning).toBe(true);
    tick(1000); 
    expect(component.time).toBe(1);
    tick(1000); 
    expect(component.time).toBe(2);
    component.stopTimer(); 
  }));

  it('should stop timer', fakeAsync(() => {
    component.startTimer();
    expect(component.isRunning).toBe(true);
    component.stopTimer();
    expect(component.isRunning).toBe(false);
  }));

  it('should reset timer', fakeAsync(() => {
    component.time = 10;
    component.resetTimer();
    expect(component.time).toBe(0);
    expect(component.isRunning).toBe(false);
  }));

  it('should format time correctly', () => {
    component.time = 65;
    expect(component.formatTime()).toBe('01:05');
  });

  it('should navigate to menu', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.goToMenu();
    expect(navigateSpy).toHaveBeenCalledWith(['/menu'], {
      queryParams: jasmine.objectContaining({
      })
    });
  });

});
