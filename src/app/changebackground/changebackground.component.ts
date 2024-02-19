import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changebackground',
  templateUrl: './changebackground.component.html',
  styleUrls: ['./changebackground.component.scss']
})
export class ChangebackgroundComponent {

  language:string = 'de';

  blueBGselected:boolean = true;
  blackBGselected:boolean = false;
  orangeBGselected:boolean = false;
  schalkeBGselected:boolean = false;
  dortmundBGselected:boolean = false;
  bayernBGselected:boolean = false;


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

  updateBackground(selection: string) {
    // Reset all background selections
    this.blueBGselected = false;
    this.blackBGselected = false;
    this.orangeBGselected = false;
    this.schalkeBGselected = false;
    this.dortmundBGselected = false;
    this.bayernBGselected = false;

    // Set the selected background
    switch (selection) {
      case 'blue':
        this.blueBGselected = true;
        break;
      case 'black':
        this.blackBGselected = true;
        break;
      case 'orange':
        this.orangeBGselected = true;
        break;
      case 'schalke':
        this.schalkeBGselected = true;
        break;
      case 'dortmund':
        this.dortmundBGselected = true;
        break;
      case 'bayern':
        this.bayernBGselected = true;
        break;
      default:
        break;
    }
  }

}
