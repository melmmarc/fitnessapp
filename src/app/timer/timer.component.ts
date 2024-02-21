import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {

  language:string = 'de';
  username:string = '';
  selectedAvatar: string = '';
  selectedGoal: string = '';

  time: number = 0;
  timerRef: any;
  isRunning: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
      this.selectedAvatar = params['selectedAvatar'];
      this.language = params['language']; 
      this.selectedGoal = params['selectedGoal']; 
      console.log('Username received in MenuComponent:', this.username);
      console.log('Selected Avatar received in MenuComponent:', this.selectedAvatar);
      console.log('Selected Language received in MenuComponent:', this.language); // Log the selected language
    });
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
    this.router.navigate(['/menu'], {
      queryParams: {
        username: this.username,
        selectedAvatar: this.selectedAvatar,
        language: this.language,
        selectedGoal: this.selectedGoal,
      }
    });
  }

  goToLocation() {
    this.router.navigate(['/location'], {
      queryParams: {
        username: this.username,
        selectedAvatar: this.selectedAvatar,
        language: this.language,
        selectedGoal: this.selectedGoal,
      }
    });
  }

  goToBMI(){
    this.router.navigate(['/bmi'], {
      queryParams: {
        username: this.username,
        selectedAvatar: this.selectedAvatar,
        language: this.language,
        selectedGoal: this.selectedGoal,
      }
    });
  }

  goToTimer(){
    this.router.navigate(['/timer'], {
      queryParams: {
        username: this.username,
        selectedAvatar: this.selectedAvatar,
        language: this.language,
        selectedGoal: this.selectedGoal,
      }
    });
  }

  goToSettings(){
    this.router.navigate(['/settings'], {
      queryParams: {
        username: this.username,
        selectedAvatar: this.selectedAvatar,
        language: this.language,
        selectedGoal: this.selectedGoal,
      }
    });
  }

}
