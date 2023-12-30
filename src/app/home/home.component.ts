import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedGender: string = ''; // Initial value
  selectedUsername: string = ''; // Initial value
  selectedGoal: string = ''; // Initial value

  selectGender(gender: string) {
    this.selectedGender = gender;
    console.log('Selected gender: ', this.selectedGender);
  }

  updateUsername(username: string) {
    this.selectedUsername = username;
    console.log('Selected username: ', this.selectedUsername);
  }

  selectGoal(goal: string) {
    this.selectedGoal = goal;
    console.log('Selected goal: ', this.selectedGoal);
  }
}
