import {Component, OnInit, ViewChild} from '@angular/core';

import {SidenavService} from './services/sidenav.service';
import {MatSidenav} from '@angular/material/sidenav';
import {SwUpdate} from '@angular/service-worker';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PwaNews';

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(
    public sidenavService: SidenavService,
    private swUpdate: SwUpdate,
    private snackBar: MatSnackBar
  ) {
  }

  close(reason: string) {
    this.sidenav.close();
  }

  ngOnInit() {
    console.log('Nav ref :: ', this.sidenav);
    this.sidenavService.setSidenavRef(this.sidenav);

    this.updateApplication();
  }

  updateApplication() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((update) => {
        const snack = this.snackBar.open('Update Available', 'Update');

        snack.onAction().subscribe(() => {
          window.location.reload();
        });
      });
    }
  }
}
