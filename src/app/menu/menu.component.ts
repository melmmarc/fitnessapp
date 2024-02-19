import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  gymday:boolean = true;
  cardioday:boolean = false;
  restday:boolean = false;

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

}
