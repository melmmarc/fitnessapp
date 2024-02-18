import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  mapSrc: SafeResourceUrl = '';

  constructor(private router: Router, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          this.mapSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.047344824669!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47962c744eee593f%3A0xa4bdccd4da0bde5!2sUniversity%20of%20Applied%20Sciences%2C%20Worms!5e0!3m2!1sen!2sde!4v1708294015938!5m2!1sen!2sde`);
        },
        error => {
          console.error("Error getting location:", error);
          // Set a fallback location
          this.mapSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.047344824669!2d8.342344777125632!3d49.63456227144793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47962c744eee593f%3A0xa4bdccd4da0bde5!2sUniversity%20of%20Applied%20Sciences%2C%20Worms!5e0!3m2!1sen!2sde!4v1708294015938!5m2!1sen!2sde");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      // Set a fallback location
      this.mapSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.047344824669!2d8.342344777125632!3d49.63456227144793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47962c744eee593f%3A0xa4bdccd4da0bde5!2sUniversity%20of%20Applied%20Sciences%2C%20Worms!5e0!3m2!1sen!2sde!4v1708294015938!5m2!1sen!2sde");
    }
  }
  

  goToMenu(){
    this.router.navigateByUrl('/menu');
  }

  goToLocation(){
    // No action needed as we're already in the location page.
  }

  goToBMI(){
    this.router.navigateByUrl('/bmi');
  }

  goToTimer(){
    this.router.navigateByUrl('/timer');
  }
}
