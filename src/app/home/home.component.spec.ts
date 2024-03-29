import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Firestore } from '@angular/fire/firestore';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent,
    HeaderComponent,
    ],
      imports: [RouterTestingModule,
        FormsModule],
      providers: [
        { provide: Firestore, useValue: {} } 
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should switch language to German', () => {
    component.switchToGerman();
    expect(component.language).toEqual('de');
  });

  it('should switch language to English', () => {
    component.switchToEnglish();
    expect(component.language).toEqual('en');
  });

  
});
