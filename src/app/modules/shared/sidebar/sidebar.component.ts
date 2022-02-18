import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  hide:boolean = true;
  hideSideNav: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  hideSideBar(){
    this.hideSideNav = !this.hideSideNav;
    this.hide = !this.hide;
  }


}
