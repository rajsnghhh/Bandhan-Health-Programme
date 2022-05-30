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
      this.sidebarService.loginId = res?.responseObject?.userdetailDTO?.loginId;
      this.sidebarService.userId = res?.responseObject?.userdetailDTO?.userId;
      this.sidebarService.RoleDTOName = res?.responseObject?.RoledetailDTO?.roleShortName;
      this.menuList = res?.responseObject.menuDetailList;
      this.sidebarService.subMenuList = this.menuList;
      console.log(this.menuList, 'menuList');
      this.checkRoledetailDTO();
    });

  }

  checkRoledetailDTO() {
    let req = {
      dataAccessDTO: {
        userId: this.sidebarService.userId,
        userName: this.sidebarService.loginId,
      }
    }
    if (this.sidebarService?.RoleDTOName?.indexOf('HCO') != -1 || this.sidebarService?.RoleDTOName?.indexOf('TL') != -1) {
      this.sidebarService.listOfBranchesOfUser(req).subscribe((res) => {
        this.sidebarService.branchId = res?.responseObject[0]?.branchId;
        this.sidebarService.branchName = res?.responseObject[0]?.branchName;
        this.sidebarService.donorName = res?.responseObject[0]?.donorMasterDto?.donorName;
      });
      this.sidebarService.regionBranchHide = false;
    } else {
      this.sidebarService.listOfRegionsOfUser(req).subscribe((res) => {
        this.sidebarService.listOfRegion = res.responseObject;
      });
      this.sidebarService.regionBranchHide = true;
    }
  }

  menuClick(i) {
    // console.log(i);
    this.subMenuList = this.menuList[i].subMenuDetailList;
    console.log(this.sidebarService.subMenuList);
  }

  subMenuClick(submenu) {

    var routeId = submenu.subFunctionMasterId;
    console.log(routeId);
    console.log(submenu.subFunctionShortName);

    if (routeId == 1) {
      this.router.navigate(['/user']);
    }

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

    if (routeId == 29) {
      this.router.navigate(['/region-branch']);
    }

    if (routeId == 37) {
      this.router.navigate(['/block']);
    }

    if (routeId == 41) {
      this.router.navigate(['/gp']);
    }

    if (routeId == 49) {
      this.router.navigate(['/village-setup']);
    }

    if (routeId == 57) {
      this.router.navigate(['/branch-villageMap']);
    }

    if (routeId == 65) {
      this.router.navigate(['/Baseline-Survey/create']);
    }

    if (routeId == 73 || routeId == 75) {
      this.router.navigate(['/Baseline-Survey/view']);
    }

    if (routeId == 81 || routeId == 83) {
      this.router.navigate(['/children-register/create']);
    }

    if (routeId == 89 || routeId == 91) {
      this.router.navigate(['/central-register/view']);
    }

    if (routeId == 97 || routeId == 99) {
      this.router.navigate(['/muac-register/create']);
    }

    if (routeId == 113 || routeId == 115) {
      this.router.navigate(['/pem-register/create']);
    }

    if (routeId == 121 || routeId == 123) {
      this.router.navigate(['/lmr']);
    }

    if (routeId == 105 || routeId == 107) {
      this.router.navigate(['/acr']);
    }

    if (routeId == 129 || routeId == 131) {
      this.router.navigate(['/pw-register']);
    }

    if (routeId == 137 || routeId == 139 || routeId == 147) {
      this.router.navigate(['/daily-activity-register']);
    }

    if (routeId == 177 || routeId == 178 || routeId == 179 || routeId == 180) {
      this.router.navigate(['/ss-setup']);
    }

    if (routeId == 185 || routeId == 189) {
      this.router.navigate(['/user-hh-ss-remap']);
    }

    if (routeId == 186) {
      this.router.navigate(['/district-setup']);
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
