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
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

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
    provideFirebaseApp(() => initializeApp({"projectId":"fitapp-d26bf","appId":"1:544070609954:web:d72c25f5921b8cd8cdae7b","storageBucket":"fitapp-d26bf.appspot.com","apiKey":"AIzaSyAOPD_y22L4nge_QW_lgTwIfdpixFc4f90","authDomain":"fitapp-d26bf.firebaseapp.com","messagingSenderId":"544070609954","measurementId":"G-PXZQ9MZH50"})),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
