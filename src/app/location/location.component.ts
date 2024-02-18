import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent{

  constructor(private router: Router) {}


  goToMenu(){
    this.router.navigateByUrl('/menu');
  }

  goToLocation(){
    // No action needed as we're already in the location page.
  }

  goToBMI(){
    this.router.navigateByUrl('/bmi');
  }

  goToTimer(){
    this.router.navigateByUrl('/timer');
  }
}
