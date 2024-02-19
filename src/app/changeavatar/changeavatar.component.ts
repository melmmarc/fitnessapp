import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changeavatar',
  templateUrl: './changeavatar.component.html',
  styleUrls: ['./changeavatar.component.scss']
})
export class ChangeavatarComponent {

  female2Selected:boolean = false;
  female3Selected:boolean = false;
  female5Selected:boolean = false;

  male1Selected:boolean = false;
  male4Selected:boolean = false;
  male5Selected:boolean = false;


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

  updateAvatar(){
    // code
  }

  toggleFemale2():void{
    if(this.female2Selected == false)
    {
      this.female2Selected = true;
      this.female3Selected = false;
      this.female5Selected = false;

      this.male1Selected = false;
      this.male4Selected = false;
      this.male5Selected = false;
    }
  }

  toggleFemale3():void{
    if(this.female3Selected == false)
    {
      this.female2Selected = false;
      this.female3Selected = true;
      this.female5Selected = false;

      this.male1Selected = false;
      this.male4Selected = false;
      this.male5Selected = false;
    }
  }

  toggleFemale5():void{
    if(this.female5Selected == false)
    {
      this.female2Selected = false;
      this.female3Selected = false;
      this.female5Selected = true;

      this.male1Selected = false;
      this.male4Selected = false;
      this.male5Selected = false;
    }
  }

  toggleMale1():void{
    if(this.male1Selected == false)
    {
      this.female2Selected = false;
      this.female3Selected = false;
      this.female5Selected = false;

      this.male1Selected = true;
      this.male4Selected = false;
      this.male5Selected = false;
    }
  }

  toggleMale4():void{
    if(this.male4Selected == false)
    {
      this.female2Selected = false;
      this.female3Selected = false;
      this.female5Selected = false;

      this.male1Selected = false;
      this.male4Selected = true;
      this.male5Selected = false;
    }
  }

  toggleMale5():void{
    if(this.male5Selected == false)
    {
      this.female2Selected = false;
      this.female3Selected = false;
      this.female5Selected = false;

      this.male1Selected = false;
      this.male4Selected = false;
      this.male5Selected = true;
    }
  }

  

}
