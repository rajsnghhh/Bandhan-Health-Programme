import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [NgbModule]
})
export class SidebarComponent implements OnInit, AfterViewInit {

  hide: boolean = true;
  hideSideNav: boolean = false;
  fullscreen: boolean = false;

  @Output() public valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    let a: any = document.querySelectorAll(".card-header");

    for (let i = 0; i < a.length; i++) {
      a[i].style.padding = 0;
    }
  }

  hideSideBar() {
    this.hideSideNav = !this.hideSideNav;
    this.hide = !this.hide;
    this.fullscreen = !this.fullscreen;
    this.valueChange.emit(this.fullscreen);
  }



}
