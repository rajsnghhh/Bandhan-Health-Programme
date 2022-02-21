import { AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ValidationService } from '../services/validation.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { fail } from 'assert';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers:[NgbModule]
})
export class SidebarComponent implements OnInit{

  hide:boolean = true;
  hideSideNav: boolean = false;
  fullscreen:boolean = false;
  aaa:boolean= false;
  bbb:boolean=true;
@ViewChild('aaa') aa:ElementRef;
@ViewChild('bbb') bb:ElementRef;


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

  collapseaaa(){
      this.bbb=!this.bbb;
    
  }
  collapsebbb(){
      this.aaa=!this.aaa;
    
  }
 
}
