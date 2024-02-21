import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-changeusername',
  templateUrl: './changeusername.component.html',
  styleUrls: ['./changeusername.component.scss']
})
export class ChangeusernameComponent {

  language:string = 'de';
  username: string = ''; 
  selectedEmail: string = ''; 
  selectedPassword: string = ''; 
  selectedGoal: string = ''; 
  selectedFrequency: string = ''; 
  selectedAvatar: string = '';

  newUsername: string = ''; // Variable to store the new username

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

  goToAccount(){
    this.router.navigate(['/account'], {
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

  changeUsername() {
    // Implement logic to update the username using this.newUsername
    // You can send an HTTP request to your backend to update the username
    // Provide feedback to the user, e.g., display a message confirming the username change
    alert('Benutzername erfolgreich geändert!');
  }

}
