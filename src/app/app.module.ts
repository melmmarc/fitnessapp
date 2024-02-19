import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    LocationComponent,
    BmiComponent,
    TimerComponent,
    SettingsComponent,
    AccountComponent,
    ChangeavatarComponent,
    ChangeusernameComponent,
    ChangepasswordComponent,
    ChangebackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
