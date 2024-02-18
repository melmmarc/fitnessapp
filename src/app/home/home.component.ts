import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {}

  selectedUsername: string = ''; 
  selectedGoal: string = ''; 

  updateUsername(username: string) {
    this.selectedUsername = username;
    console.log('Selected username: ', this.selectedUsername);
  }

  selectGoal(goal: string) {
    this.selectedGoal = goal;
    console.log('Selected goal: ', this.selectedGoal);
  }

  goToMenu() {
    this.router.navigateByUrl('/menu');
  }
}
