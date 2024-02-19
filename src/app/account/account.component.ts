import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  male1selected:boolean = false;
  male4selected:boolean = true;
  male5selected:boolean = false;
  female2selected:boolean = false;
  female3selected:boolean = false;
  female5selected:boolean = false;

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

  goToChangeavatar(){
    this.router.navigateByUrl('/changeavatar');
  }

  goToChangeusername(){
    this.router.navigateByUrl('/changeusername');
  }

  goToChangepassword(){
    this.router.navigateByUrl('/changepassword');
  }

  goToChangebackground(){
    this.router.navigateByUrl('/changebackground');
  }

}