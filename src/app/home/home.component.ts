import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { 
    Firestore,
    collection,
    addDoc,

}  from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private firestore: Firestore, private router: Router) {}


  language:string = 'de';
  selectedUsername: string = ''; 
  selectedEmail: string = ''; 
  selectedPassword: string = ''; 
  selectedGoal: string = ''; 
  selectedFrequency: string = ''; 
  selectedAvatar: string = '';
  selectedBG: string = 'blue';

  blueBGselected:boolean = true;
  blackBGselected:boolean = false;
  orangeBGselected:boolean = false;
  schalkeBGselected:boolean = false;
  dortmundBGselected:boolean = false;
  bayernBGselected:boolean = false;

  female2Selected:boolean = false;
  female3Selected:boolean = false;
  female5Selected:boolean = false;

  male1Selected:boolean = false;
  male4Selected:boolean = false;
  male5Selected:boolean = false;

  switchToGerman() {
    this.language = 'de';
  }

  switchToEnglish() {
    this.language = 'en';
  }

  updateUsername(username: string) {
    this.selectedUsername = username;
  }

  addData(f: any) {
    const userData = f.value;
    userData.goal = this.selectedGoal;
    userData.frequency = this.selectedFrequency;
    userData.selectedAvatar = this.getSelectedAvatar();
    userData.language = this.language;
    const collectionInstance = collection(this.firestore, 'users');
    addDoc(collectionInstance, userData).then(() => {
      console.log('Data saved successfully');

      this.router.navigate(['/menu'], { queryParams: { 
        username: userData.username, 
        selectedAvatar: userData.selectedAvatar,
        language: userData.language,  
        selectedGoal: userData.goal,
        email: userData.email,
        password: userData.password,
        frequency: userData.frequency,
        selectedBG: 'blue',
      }});
    }).catch((err) => {
      console.log(err);
    });
  }



  getSelectedAvatar(): string {
    if (this.male1Selected) {
      return 'male1';
    } else if (this.male4Selected) {
      return 'male4';
    } else if (this.male5Selected) {
      return 'male5';
    } else if (this.female2Selected) {
      return 'female2';
    } else if (this.female3Selected) {
      return 'female3';
    } else if (this.female5Selected) {
      return 'female5';
    } else {
      return ''; 
    }
  }

  selectGoal(event: any) {
    const value = event.target.value;
    if (value) {
      this.selectedGoal = value;
    }
  }

  selectFrequency(event: any) {
    const value = event.target.value;
    if (value) {
      this.selectedFrequency = value;
    }
  }

  goToMenu() {
    this.router.navigateByUrl('/menu');
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
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

  isFormValid(): boolean {
    console.log('Username:', this.selectedUsername);
    console.log('Email:', this.selectedEmail);
    console.log('Password:', this.selectedPassword);
    console.log('Goal:', this.selectedGoal);
    console.log('Frequency:', this.selectedFrequency);
    console.log('Avatar:', this.getSelectedAvatar());
  
    return (
      this.selectedUsername.trim() !== '' &&
      this.selectedEmail.trim() !== '' &&
      this.selectedPassword.trim() !== '' &&
      this.selectedGoal !== '' &&
      this.selectedFrequency !== '' && 
      this.getSelectedAvatar() !== ''
    );
  }
}
