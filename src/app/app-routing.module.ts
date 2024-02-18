import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LocationComponent } from './location/location.component';
import { BmiComponent } from './bmi/bmi.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  { 
    path: '', component: MenuComponent 
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
