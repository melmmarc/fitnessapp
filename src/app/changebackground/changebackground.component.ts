import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-changebackground',
  templateUrl: './changebackground.component.html',
  styleUrls: ['./changebackground.component.scss']
})
export class ChangebackgroundComponent {

  language:string = 'de';
  username: string = ''; 
  selectedEmail: string = ''; 
  selectedPassword: string = ''; 
  selectedGoal: string = ''; 
  selectedFrequency: string = ''; 
  selectedAvatar: string = '';

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
      this.selectedEmail = params['email']; // Add email
      this.selectedPassword = params['password']; // Add password
      this.selectedFrequency = params['frequency']; // Add frequency
    });
  }

  goToMenu(){
    this.router.navigate(['/menu'], {
      queryParams: {
        username: this.username,
        selectedAvatar: this.selectedAvatar,
        language: this.language,
        selectedGoal: this.selectedGoal,
        selectedEmail: this.selectedEmail,
        selectedPassword: this.selectedPassword,
        selectedFrequency: this.selectedFrequency,
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
        selectedEmail: this.selectedEmail,
        selectedPassword: this.selectedPassword,
        selectedFrequency: this.selectedFrequency,
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
        selectedEmail: this.selectedEmail,
        selectedPassword: this.selectedPassword,
        selectedFrequency: this.selectedFrequency,
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
        selectedEmail: this.selectedEmail,
        selectedPassword: this.selectedPassword,
        selectedFrequency: this.selectedFrequency,
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
        selectedEmail: this.selectedEmail,
        selectedPassword: this.selectedPassword,
        selectedFrequency: this.selectedFrequency,
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
        selectedEmail: this.selectedEmail,
        selectedPassword: this.selectedPassword,
        selectedFrequency: this.selectedFrequency,
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
