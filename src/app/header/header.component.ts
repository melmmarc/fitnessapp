import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  showSettingsIcon: boolean;

  constructor(private router: Router) {
    this.showSettingsIcon = this.router.url !== '/home';
  }

  handleLogoClick() {
    if (this.router.url !== '/home') {
      this.router.navigateByUrl('/menu');
    }
  }

  goToSettings(){
    this.router.navigateByUrl('/settings');
  }

  goToMenu(){
    this.router.navigateByUrl('/menu');
  }

}
