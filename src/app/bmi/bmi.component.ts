import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent {

  language:string = 'en';

  height:number = 180;
  weight:number = 80;
  bmi: number= 0;

  age: number = 30;
  gender: string = 'male';
  activityLevel: string = 'normal'; // Default activity level
  dailyCalorieIntake: number = 0;

  constructor(private router: Router) {}

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

  calculateBMI() {
    if (this.height && this.weight) {
      this.bmi = this.weight / ((this.height / 100) ** 2);
    }
  }

  getBMICategory(bmi: number): string {
    if (bmi < 16) {
      return 'Kritisches Untergewicht';
    } else if (bmi >= 16 && bmi < 18.5) {
      return 'Untergewicht';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normalgewicht';
    } else if (bmi >= 25 && bmi < 30) {
      return 'Leichtes Übergewicht';
    } else {
      return 'Übergewicht';
    }
  }

  calculateDailyCalorieIntake() {
    // Implement your chosen formula to calculate daily calorie intake
    // For example, using the Mifflin-St Jeor Equation
    if (this.age && this.gender && this.weight && this.height && this.activityLevel) {
      let bmr: number;
      if (this.gender === 'male') {
        bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
      } else {
        bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
      }
      // Adjust BMR based on activity level
      let activityMultiplier: number;
      switch (this.activityLevel) {
        case 'low':
          activityMultiplier = 1.2;
          break;
        case 'normal':
          activityMultiplier = 1.55;
          break;
        case 'high':
          activityMultiplier = 1.9;
          break;
        default:
          activityMultiplier = 1.55; // Default to 'normal'
          break;
      }
      this.dailyCalorieIntake = bmr * activityMultiplier;
    }
  }

}
