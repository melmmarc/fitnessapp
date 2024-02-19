import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changeavatar',
  templateUrl: './changeavatar.component.html',
  styleUrls: ['./changeavatar.component.scss']
})
export class ChangeavatarComponent {


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

  goToSettings(){
    this.router.navigateByUrl('/settings');
  }

  goToAccount(){
    this.router.navigateByUrl('/account');
  }

  

}
