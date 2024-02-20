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

  toggleBlue():void{
    if(this.blueBGselected == false)
    {
      this.blueBGselected = true;
      this.blackBGselected = false;
      this.orangeBGselected = false;
      this.schalkeBGselected = false;
      this.dortmundBGselected = false;
      this.bayernBGselected = false;
    }
  }

  toggleBlack():void{
    if(this.blackBGselected == false)
    {
      this.blueBGselected = false;
      this.blackBGselected = true;
      this.orangeBGselected = false;
      this.schalkeBGselected = false;
      this.dortmundBGselected = false;
      this.bayernBGselected = false;
    }
  }

  toggleOrange():void{
    if(this.orangeBGselected == false)
    {
      this.blueBGselected = false;
      this.blackBGselected = false;
      this.orangeBGselected = true;
      this.schalkeBGselected = false;
      this.dortmundBGselected = false;
      this.bayernBGselected = false;
    }
  }

  toggleSchalke():void{
    if(this.schalkeBGselected == false)
    {
      this.blueBGselected = false;
      this.blackBGselected = false;
      this.orangeBGselected = false;
      this.schalkeBGselected = true;
      this.dortmundBGselected = false;
      this.bayernBGselected = false;
    }
  }

  toggleDortmund():void{
    if(this.dortmundBGselected == false)
    {
      this.blueBGselected = false;
      this.blackBGselected = false;
      this.orangeBGselected = false;
      this.schalkeBGselected = false;
      this.dortmundBGselected = true;
      this.bayernBGselected = false;
    }
  }

  toggleBayern():void{
    if(this.bayernBGselected == false)
    {
      this.blueBGselected = false;
      this.blackBGselected = false;
      this.orangeBGselected = false;
      this.schalkeBGselected = false;
      this.dortmundBGselected = false;
      this.bayernBGselected = true;
    }
  }
}
