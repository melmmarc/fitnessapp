import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  language:string = 'de';
  username: string = ''; 
  selectedEmail: string = ''; 
  selectedPassword: string = ''; 
  selectedGoal: string = ''; 
  selectedFrequency: string = ''; 
  selectedAvatar: string = '';

  showSettingsIcon: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.showSettingsIcon = this.router.url !== '/home';
  }

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

  handleLogoClick() {
    if (this.router.url !== '/home') {
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

}
