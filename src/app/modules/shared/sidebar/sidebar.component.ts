import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/login/login.service';
import { SidebarService } from './sidebar.service';

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
  accessList: any;

  @Output() public valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private loginService: LoginService, private router: Router, private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.loginService.user.subscribe(res => {
      console.log(res);
      this.sidebarService.loginId = res.responseObject.userdetailDTO.loginId;
      this.sidebarService.userId = res.responseObject.userdetailDTO.userId;
      this.sidebarService.RoleDTOName = res.responseObject.RoledetailDTO.roleShortName;
      this.menuList = res.responseObject.menuDetailList;
      console.log(this.menuList, 'menuList');
    });


    this.checkRoledetailDTO();

  }

  checkRoledetailDTO() {
    let req = {
      dataAccessDTO: {
        userId: this.sidebarService.userId,
        userName: this.sidebarService.loginId,
      }
    }
    if (this.sidebarService.RoleDTOName === 'HCO' || this.sidebarService.RoleDTOName === 'TL') {
      this.sidebarService.listOfBranchesOfUser(req).subscribe((res) => {
        this.sidebarService.branchId = res.responseObject[0].branchId
      })
    } else {
      this.sidebarService.listOfRegionsOfUser(req).subscribe((res) => {
        this.sidebarService.listOfRegion = res.responseObject;
      })
    }
  }

  menuClick(i) {
    // console.log(i);
    this.subMenuList = this.menuList[i].subMenuDetailList;
    console.log(this.subMenuList);
  }

  subMenuClick(submenu) {

    var routeId = submenu.subFunctionMasterId
    console.log(routeId);
    console.log(submenu.subFunctionShortName);

    if (routeId == 5) {
      this.router.navigate(['/role-access']);
    }

    if (routeId == 9) {
      this.router.navigate(['/vertical']);
    }

    if (routeId == 13) {
      this.router.navigate(['/sub-vertical']);
    }

    if (routeId == 17) {
      this.router.navigate(['/donor']);
    }

    if (routeId == 21) {
      this.router.navigate(['/project']);
    }

    if (routeId == 25) {
      this.router.navigate(['/mou']);
    }

    if (routeId == 65) {
      this.router.navigate(['/Baseline-Survey/create']);
    }

    if (routeId == 73) {
      this.router.navigate(['/Baseline-Survey/view']);
    }

    if (routeId == 81) {
      this.router.navigate(['/children-register/create']);
    }

    if (routeId == 89) {
      this.router.navigate(['/central-register/view']);
    }

    if (routeId == 97) {
      this.router.navigate(['/muac-register/create']);
    }
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
