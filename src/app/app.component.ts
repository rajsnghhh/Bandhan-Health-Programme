import { Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ValidationService } from './modules/shared/services/validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bhp-web';

  constructor(public validationService: ValidationService){}

  ngOnInit(): void {
  }
  
  
}
