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
  selectedBG: string = 'blue';

  blueBGselected:boolean = true;
  blackBGselected:boolean = false;
  orangeBGselected:boolean = false;
  schalkeBGselected:boolean = false;
  dortmundBGselected:boolean = false;
  bayernBGselected:boolean = false;

  height:number = 180;
  weight:number = 80;
  bmi: number= 0;

  age: number = 30;
  gender: string = 'male';
  activityLevel: string = 'normal'; 
  dailyCalorieIntake: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
      this.selectedAvatar = params['selectedAvatar'];
      this.language = params['language']; 
      this.selectedGoal = params['selectedGoal']; 
      this.selectedEmail = params['email']; 
      this.selectedPassword = params['password']; 
      this.selectedFrequency = params['frequency']; 
      this.selectedBG = params['selectedBG'];  
      this.updateBackgroundSelection();
    });
  }

  updateBackgroundSelection() {
    this.blackBGselected = this.selectedBG === 'black';
    this.orangeBGselected = this.selectedBG === 'orange';
    this.schalkeBGselected = this.selectedBG === 'schalke';
    this.dortmundBGselected = this.selectedBG === 'dortmund';
    this.bayernBGselected = this.selectedBG === 'bayern';
  }

  goToMenu(){
    this.router.navigate(['/menu'], {
      queryParams: {
        username: this.username,
        selectedAvatar: this.selectedAvatar,
        language: this.language,
        selectedGoal: this.selectedGoal,
        email: this.selectedEmail,
        password: this.selectedPassword,
        frequency: this.selectedFrequency,
        selectedBG: this.selectedBG,
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
        email: this.selectedEmail,
        password: this.selectedPassword,
        frequency: this.selectedFrequency,
        selectedBG: this.selectedBG,
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
        email: this.selectedEmail,
        password: this.selectedPassword,
        frequency: this.selectedFrequency,
        selectedBG: this.selectedBG,
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
        email: this.selectedEmail,
        password: this.selectedPassword,
        frequency: this.selectedFrequency,
        selectedBG: this.selectedBG,
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
        email: this.selectedEmail,
        password: this.selectedPassword,
        frequency: this.selectedFrequency,
        selectedBG: this.selectedBG,
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
    if(this.language=='de')
    {
      if (this.age && this.gender && this.weight && this.height && this.activityLevel) {
        let bmr: number;
        if (this.gender === 'male') {
          bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
        } else {
          bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
        }

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
            activityMultiplier = 1.55; 
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
            activityMultiplier = 1.55; 
            break;
        }
        this.dailyCalorieIntake = bmr * activityMultiplier;
      }
    }
    
  }

}
