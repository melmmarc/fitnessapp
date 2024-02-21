import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-changeavatar',
  templateUrl: './changeavatar.component.html',
  styleUrls: ['./changeavatar.component.scss']
})
export class ChangeavatarComponent {

  language:string = 'de';
  username: string = ''; 
  selectedEmail: string = ''; 
  selectedPassword: string = ''; 
  selectedGoal: string = ''; 
  selectedFrequency: string = ''; 
  selectedAvatar: string = '';

  female2Selected:boolean = false;
  female3Selected:boolean = false;
  female5Selected:boolean = false;

  male1Selected:boolean = false;
  male4Selected:boolean = false;
  male5Selected:boolean = false;


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
    });
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
      }
    });
  }

  updateAvatar(): void {
    // Assuming each avatar selection sets the corresponding property to true when selected
    if (this.female2Selected) {
      this.selectedAvatar = 'female2';
    } else if (this.female3Selected) {
      this.selectedAvatar = 'female3';
    } else if (this.female5Selected) {
      this.selectedAvatar = 'female5';
    } else if (this.male1Selected) {
      this.selectedAvatar = 'male1';
    } else if (this.male4Selected) {
      this.selectedAvatar = 'male4';
    } else if (this.male5Selected) {
      this.selectedAvatar = 'male5';
    }
    this.goToAccount();
  
    // Optionally, you can perform further actions here, such as saving the selected avatar to a database
  
    // Navigate to a different page or perform other actions if needed
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
