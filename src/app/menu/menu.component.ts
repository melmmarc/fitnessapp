import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  language:string = 'de';
  username: string = ''; 
  selectedEmail: string = ''; 
  selectedPassword: string = ''; 
  selectedGoal: string = ''; 
  selectedFrequency: string = ''; 
  selectedAvatar: string = '';
  selectedBG: string = 'blue';

  gymday:boolean = true;
  cardioday:boolean = false;
  restday:boolean = false;
  

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
    });
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

}
