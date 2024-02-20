import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LocationComponent } from './location/location.component';
import { BmiComponent } from './bmi/bmi.component';
import { TimerComponent } from './timer/timer.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountComponent } from './account/account.component';
import { ChangeavatarComponent } from './changeavatar/changeavatar.component';
import { ChangeusernameComponent } from './changeusername/changeusername.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ChangebackgroundComponent } from './changebackground/changebackground.component';
import { StartComponent } from './start/start.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { 
    path: '', component: LoginComponent 
  }, 
  { 
    path: 'home', component: HomeComponent 
  }, 
  { 
    path: 'menu', component: MenuComponent 
  }, 
  { 
    path: 'location', component: LocationComponent 
  }, 
  { 
    path: 'bmi', component: BmiComponent 
  }, 
  { 
    path: 'timer', component: TimerComponent 
  }, 
  { 
    path: 'settings', component: SettingsComponent 
  }, 
  { 
    path: 'account', component: AccountComponent 
  },
  { 
    path: 'changeavatar', component: ChangeavatarComponent 
  },
  { 
    path: 'changeusername', component: ChangeusernameComponent 
  },
  { 
    path: 'changepassword', component: ChangepasswordComponent 
  },
  { 
    path: 'changebackground', component: ChangebackgroundComponent 
  },
  { 
    path: 'start', component: StartComponent 
  },
  { 
    path: 'login', component: LoginComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
