import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {

  language:string = 'de';
  username: string = ''; 
  selectedEmail: string = ''; 
  selectedPassword: string = ''; 
  selectedGoal: string = ''; 
  selectedFrequency: string = ''; 
  selectedAvatar: string = '';

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
      this.selectedEmail = params['selectedEmail'];
      this.selectedPassword = params['selectedPassword'];
      this.selectedFrequency = params['selectedFrequency'];
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

  goToMenu() {
    this.router.navigate(['/menu'], {
      queryParams: {
        username: this.username,
        selectedAvatar: this.selectedAvatar,
        language: this.language,
        selectedGoal: this.selectedGoal,
        selectedEmail: this.selectedEmail,
        selectedPassword: this.selectedPassword,
        selectedFrequency: this.selectedFrequency,
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
        selectedEmail: this.selectedEmail,
        selectedPassword: this.selectedPassword,
        selectedFrequency: this.selectedFrequency,
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
        selectedEmail: this.selectedEmail,
        selectedPassword: this.selectedPassword,
        selectedFrequency: this.selectedFrequency,
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
        selectedEmail: this.selectedEmail,
        selectedPassword: this.selectedPassword,
        selectedFrequency: this.selectedFrequency,
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
        selectedEmail: this.selectedEmail,
        selectedPassword: this.selectedPassword,
        selectedFrequency: this.selectedFrequency,
      }
    });
  }

}
