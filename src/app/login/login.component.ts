import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  language:string = 'de';
  selectedUsername: string = ''; 
  selectedEmail: string = ''; 
  selectedPassword: string = ''; 
  selectedGoal: string = ''; 
  selectedFrequency: string = ''; 

  constructor(private router: Router) {}

}
