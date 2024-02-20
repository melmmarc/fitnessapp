import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {}

  language:string = 'de';
  selectedUsername: string = ''; 
  selectedEmail: string = ''; 
  selectedPassword: string = ''; 
  selectedGoal: string = ''; 
  selectedFrequency: string = ''; 

  female2Selected:boolean = false;
  female3Selected:boolean = false;
  female5Selected:boolean = false;

  male1Selected:boolean = false;
  male4Selected:boolean = false;
  male5Selected:boolean = false;

  // Function to change language to German ('de')
  switchToGerman() {
    this.language = 'de';
    // You can add additional logic here if needed
  }

  // Function to change language to English ('en')
  switchToEnglish() {
    this.language = 'en';
    // You can add additional logic here if needed
  }

  updateUsername(username: string) {
    this.selectedUsername = username;
    console.log('Selected username: ', this.selectedUsername);
  }

//   addData(f: any){
//     const collectionInstance = collection(this.firestore, 'users');
//     addDoc(collectionInstance, f.value).then(() => {
//         console.log('Data saved successfully');

//     }).catch((err) => {
//         console.log(err)
//     })
//   }

  selectGoal(goal: string) {
    this.selectedGoal = goal;
    console.log('Selected goal: ', this.selectedGoal);
  }

  goToMenu() {
    this.router.navigateByUrl('/menu');
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
