import {Component, OnInit} from '@angular/core';

import {SidenavService} from '../services/sidenav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  username = 'Guest';

  constructor(public sidenavService: SidenavService) {
  }

  ngOnInit() {
  }

  closeSideNav() {
    this.sidenavService.getSidenavRef().close();
  }

}
