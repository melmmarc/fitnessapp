import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-changebackground',
  templateUrl: './changebackground.component.html',
  styleUrls: ['./changebackground.component.scss']
})
export class ChangebackgroundComponent {

  language:string = 'de';
  username:string = '';
  selectedAvatar: string = '';
  selectedGoal: string = '';

  blueBGselected:boolean = true;
  blackBGselected:boolean = false;
  orangeBGselected:boolean = false;
  schalkeBGselected:boolean = false;
  dortmundBGselected:boolean = false;
  bayernBGselected:boolean = false;


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
