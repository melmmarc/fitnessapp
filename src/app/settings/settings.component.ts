import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

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

  goToAccount() {
    this.router.navigate(['/account'], {
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

  

  logOutDE(): void {
    if (confirm('Wollen Sie sich wirklich abmelden?')) {
      this.router.navigate(['/login'], {
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

  logOutEN(): void {
    if (confirm('Do you really want to logout?')) {
      this.router.navigate(['/login'], {
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

  deleteAccountDE(): void {
    if (confirm('Wollen Sie Ihren Account wirklich löschen?')) {
      this.router.navigateByUrl('/login');
    }
  }

  deleteAccountEN(): void {
    if (confirm('Do you really want to delete your account?')) {
      this.router.navigateByUrl('/login');
    }
  }

}
