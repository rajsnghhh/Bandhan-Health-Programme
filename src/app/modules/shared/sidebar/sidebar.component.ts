import { AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  hide:boolean = true;
  hideSideNav: boolean = false;
  fullscreen:boolean = false;

  @Output() public valueChange:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public validationService: ValidationService) { }

  ngOnInit(): void {
    
  }


  hideSideBar(){
    this.hideSideNav = !this.hideSideNav;
    this.hide = !this.hide;
    this.fullscreen = !this.fullscreen;
    this.valueChange.emit(this.fullscreen);
  }

 
 
}
