import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent {

  language:string = 'de';
  username: string = ''; 
  selectedEmail: string = ''; 
  selectedPassword: string = ''; 
  selectedGoal: string = ''; 
  selectedFrequency: string = ''; 
  selectedAvatar: string = '';

  height:number = 180;
  weight:number = 80;
  bmi: number= 0;

  age: number = 30;
  gender: string = 'male';
  activityLevel: string = 'normal'; // Default activity level
  dailyCalorieIntake: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
      this.selectedAvatar = params['selectedAvatar'];
      this.language = params['language']; 
      this.selectedGoal = params['selectedGoal']; 
      this.selectedEmail = params['email']; // Add email
      this.selectedPassword = params['password']; // Add password
      this.selectedFrequency = params['frequency']; // Add frequency
      console.log('Username received in MenuComponent:', this.username);
      console.log('Selected Avatar received in MenuComponent:', this.selectedAvatar);
      console.log('Selected Language received in MenuComponent:', this.language); // Log the selected language
    });
  }

  goToMenu(){
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

  calculateBMI() {
    if (this.height && this.weight) {
      this.bmi = this.weight / ((this.height / 100) ** 2);
    }
  }

  getBMICategory(bmi: number): string {

    if(this.language=='de')
    {
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

    if(this.language=='en')
    {
      if (bmi < 16) {
        return 'Critically Underweight';
      } else if (bmi >= 16 && bmi < 18.5) {
        return 'Underweight';
      } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal Weight';
      } else if (bmi >= 25 && bmi < 30) {
        return 'Slightly Overweight';
      } else {
        return 'Overweight';
      }
    }

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
    if(this.language=='de')
    {
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
    else{
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

}
