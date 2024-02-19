import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  language:string = 'de';

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

  goToAccount(){
    this.router.navigateByUrl('/account');
  }

  

  logOut(): void {
    if (confirm('Wollen Sie sich wirklich abmelden?')) {
      
    }
  }

  deleteAccount(): void {
    if (confirm('Wollen Sie Ihren Account wirklich löschen?')) {
      
    }
  }

}
