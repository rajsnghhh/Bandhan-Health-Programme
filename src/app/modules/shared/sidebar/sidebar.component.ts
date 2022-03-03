import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/login/login.service';

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
  panelOpenState = false;
  user: any;
  menuList: any
  subMenuList: any;

  @Output() public valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private loginService: LoginService, private router: Router,) { }

  ngOnInit(): void {
    this.loginService.user.subscribe(res => {
      console.log(res);
      
      this.menuList = res.responseObject.menuDetailList;
      console.log(this.menuList, 'menuList');
    });

  }

  menuClick(i) {
    // console.log(i);
    this.subMenuList = this.menuList[i].subMenuDetailList;
    console.log(this.subMenuList);
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
