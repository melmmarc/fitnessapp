import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {

  language:string = 'de';

  time: number = 0;
  timerRef: any;
  isRunning: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }

  startTimer() {
    this.isRunning = true;
    this.timerRef = setInterval(() => {
      this.time++;
    }, 1000);
  }

  stopTimer() {
    this.isRunning = false;
    clearInterval(this.timerRef);
  }

  resetTimer() {
    this.time = 0;
    clearInterval(this.timerRef);
  }

  formatTime() {
    const minutes: string = Math.floor(this.time / 60).toString().padStart(2, '0');
    const seconds: string = (this.time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  goToMenu(){
    this.router.navigateByUrl('/menu');
  }

  goToLocation(){
    this.router.navigateByUrl('/location');
  }

  goToBMI(){
    this.router.navigateByUrl('/bmi');
  }

  goToTimer(){
    this.router.navigateByUrl('/timer');
  }

  goToSettings(){
    this.router.navigateByUrl('/settings');
  }

}
