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
  selectedBG: string = 'blue';

  blueBGselected:boolean = false;
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
      this.selectedEmail = params['email']; 
      this.selectedPassword = params['password']; 
      this.selectedFrequency = params['frequency']; 
      this.selectedBG = params['selectedBG'];  
      this.updateBackgroundSelection();
      if (this.selectedBG === 'blue') {
        this.blueBGselected = true;
      }
    });
  }

  updateBackgroundSelection() {
    this.blackBGselected = this.selectedBG === 'black';
    this.orangeBGselected = this.selectedBG === 'orange';
    this.schalkeBGselected = this.selectedBG === 'schalke';
    this.dortmundBGselected = this.selectedBG === 'dortmund';
    this.bayernBGselected = this.selectedBG === 'bayern';
  }

  

  goToMenu(){
    this.router.navigate(['/menu'], {
      queryParams: {
        username: this.username,
        selectedAvatar: this.selectedAvatar,
        language: this.language,
        selectedGoal: this.selectedGoal,
        email: this.selectedEmail,
        password: this.selectedPassword,
        frequency: this.selectedFrequency,
        selectedBG: this.selectedBG,
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
        email: this.selectedEmail,
        password: this.selectedPassword,
        frequency: this.selectedFrequency,
        selectedBG: this.selectedBG,
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
        email: this.selectedEmail,
        password: this.selectedPassword,
        frequency: this.selectedFrequency,
        selectedBG: this.selectedBG,
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
        email: this.selectedEmail,
        password: this.selectedPassword,
        frequency: this.selectedFrequency,
        selectedBG: this.selectedBG,
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
        email: this.selectedEmail,
        password: this.selectedPassword,
        frequency: this.selectedFrequency,
        selectedBG: this.selectedBG,
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
        email: this.selectedEmail,
        password: this.selectedPassword,
        frequency: this.selectedFrequency,
        selectedBG: this.selectedBG,
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

  saveSelectedBG(): void {
    // Logic to save the currently selected background into selectedBG
    if (this.blueBGselected) {
      this.selectedBG = 'blue';
    } else if (this.blackBGselected) {
      this.selectedBG = 'black';
    } else if (this.orangeBGselected) {
      this.selectedBG = 'orange';
    } else if (this.schalkeBGselected) {
      this.selectedBG = 'schalke';
    } else if (this.dortmundBGselected) {
      this.selectedBG = 'dortmund';
    } else if (this.bayernBGselected) {
      this.selectedBG = 'bayern';
    }

    // You can perform any additional logic here before saving if needed.

    // Now, navigate to the desired page and pass the updated selectedBG value.
    this.router.navigate(['/account'], {
      queryParams: {
        username: this.username,
        selectedAvatar: this.selectedAvatar,
        language: this.language,
        selectedGoal: this.selectedGoal,
        email: this.selectedEmail,
        password: this.selectedPassword,
        frequency: this.selectedFrequency,
        selectedBG: this.selectedBG,
      }
    });
  }

  buyBackgroundDE(): void {
    // Logic to save the currently selected background into selectedBG
    if (confirm('Möchten Sie diesen Hintergrund wirklich für 1,99€ kaufen?')) {
      if (this.blueBGselected) {
        this.selectedBG = 'blue';
      } else if (this.blackBGselected) {
        this.selectedBG = 'black';
      } else if (this.orangeBGselected) {
        this.selectedBG = 'orange';
      } else if (this.schalkeBGselected) {
        this.selectedBG = 'schalke';
      } else if (this.dortmundBGselected) {
        this.selectedBG = 'dortmund';
      } else if (this.bayernBGselected) {
        this.selectedBG = 'bayern';
      }
  
      // You can perform any additional logic here before saving if needed.
  
      // Now, navigate to the desired page and pass the updated selectedBG value.
      this.router.navigate(['/account'], {
        queryParams: {
          username: this.username,
          selectedAvatar: this.selectedAvatar,
          language: this.language,
          selectedGoal: this.selectedGoal,
          email: this.selectedEmail,
          password: this.selectedPassword,
          frequency: this.selectedFrequency,
          selectedBG: this.selectedBG,
        }
      });
    }
  }

  buyBackgroundEN(): void {
    // Logic to save the currently selected background into selectedBG
    if (confirm('Do you really want to buy this background image for 1.99€?')) {
      if (this.blueBGselected) {
        this.selectedBG = 'blue';
      } else if (this.blackBGselected) {
        this.selectedBG = 'black';
      } else if (this.orangeBGselected) {
        this.selectedBG = 'orange';
      } else if (this.schalkeBGselected) {
        this.selectedBG = 'schalke';
      } else if (this.dortmundBGselected) {
        this.selectedBG = 'dortmund';
      } else if (this.bayernBGselected) {
        this.selectedBG = 'bayern';
      }
  
      // You can perform any additional logic here before saving if needed.
  
      // Now, navigate to the desired page and pass the updated selectedBG value.
      this.router.navigate(['/account'], {
        queryParams: {
          username: this.username,
          selectedAvatar: this.selectedAvatar,
          language: this.language,
          selectedGoal: this.selectedGoal,
          email: this.selectedEmail,
          password: this.selectedPassword,
          frequency: this.selectedFrequency,
          selectedBG: this.selectedBG,
        }
      });
    }
  }

}

  

