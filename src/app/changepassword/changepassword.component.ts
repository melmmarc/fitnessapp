import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent {

  language:string = 'de';
  username:string = '';
  selectedAvatar: string = '';
  selectedGoal: string = '';

  newPassword: string = ''; 

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

  goToAccount(){
    this.router.navigateByUrl('/account');
  }

  changePassword() {
    // Implement logic to update the username using this.newUsername
    // You can send an HTTP request to your backend to update the username
    // Provide feedback to the user, e.g., display a message confirming the username change
    alert('Passwort erfolgreich geändert!');
  }

}
