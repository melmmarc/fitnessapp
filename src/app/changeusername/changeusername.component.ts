import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-changeusername',
  templateUrl: './changeusername.component.html',
  styleUrls: ['./changeusername.component.scss']
})
export class ChangeusernameComponent {

  language:string = 'de';
  username:string = '';
  selectedAvatar: string = '';
  selectedGoal: string = '';

  newUsername: string = ''; // Variable to store the new username

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

  goToAccount(){
    this.router.navigate(['/account'], {
      queryParams: {
        username: this.username,
        selectedAvatar: this.selectedAvatar,
        language: this.language,
        selectedGoal: this.selectedGoal,
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
