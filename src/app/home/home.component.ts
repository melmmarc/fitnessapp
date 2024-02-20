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

  addData(f: any) {
    const userData = f.value; // Extract form data
    userData.goal = this.selectedGoal; // Add selected goal to userData
    userData.frequency = this.selectedFrequency; // Add selected frequency to userData
    console.log('Data to be stored:', userData); // Log userData to check if goal and frequency are included
    const collectionInstance = collection(this.firestore, 'users');
    addDoc(collectionInstance, userData).then(() => {
      console.log('Data saved successfully');
      this.router.navigateByUrl('/menu'); // Navigate to /menu route after data is saved
    }).catch((err) => {
      console.log(err);
    });
  }

  selectGoal(event: any) {
    const value = event.target.value;
    if (value) {
      this.selectedGoal = value;
      console.log('Selected goal: ', this.selectedGoal);
    }
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
