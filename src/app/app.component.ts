import { Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ValidationService } from './modules/shared/services/validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'bhp-web';
  fullscreenData:boolean;

  constructor(){}

  
  
  fullscreenMethod(data){
    this.fullscreenData = data;
  }
  
}
