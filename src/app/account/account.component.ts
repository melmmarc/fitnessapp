import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  language:string = 'de';
  username:string = '';
  selectedAvatar: string = '';
  selectedGoal: string = '';

  male1selected:boolean = false;
  male4selected:boolean = true;
  male5selected:boolean = false;
  female2selected:boolean = false;
  female3selected:boolean = false;
  female5selected:boolean = false;

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

  // Function to change language to German ('de')
  switchToGerman() {
    this.language = 'de';
    // You can add additional logic here if needed
  }

  // Function to change language to English ('en')
  switchToEnglish() {
    this.language = 'en';
    // You can add additional logic here if needed
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

  goToChangeavatar(){
    this.router.navigate(['/changeavatar'], {
      queryParams: {
        username: this.username,
        selectedAvatar: this.selectedAvatar,
        language: this.language,
        selectedGoal: this.selectedGoal,
      }
    });
  }

  goToChangeusername(){
    this.router.navigate(['/changeusername'], {
      queryParams: {
        username: this.username,
        selectedAvatar: this.selectedAvatar,
        language: this.language,
        selectedGoal: this.selectedGoal,
      }
    });
  }

  goToChangepassword(){
    this.router.navigate(['/changepassword'], {
      queryParams: {
        username: this.username,
        selectedAvatar: this.selectedAvatar,
        language: this.language,
        selectedGoal: this.selectedGoal,
      }
    });
  }

  goToChangebackground(){
    this.router.navigate(['/changebackground'], {
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
