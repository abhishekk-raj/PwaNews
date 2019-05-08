import {Injectable} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private sidenav: MatSidenav;

  constructor() {
  }

  setSidenavRef(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  getSidenavRef() {
    return this.sidenav;
  }
}
