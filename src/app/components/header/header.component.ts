import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { SidenavService } from '../../services/sidenav.service';
import { SwPush } from '@angular/service-worker';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter<boolean>();


  readonly VAPID_PUBLIC_KEY = 'BPHZPfD6ibAOEJKIUAhVBuCm7CXisWr0i_pv25fENuJFVmHUNRWY4vSMqdKeLtNltFyuKm-_w1qpL-xOif79u4Y';

  navToggle() {
    this.toggleSideNav.emit(true);
  }

  constructor(private sidenavService: SidenavService,
              private swPush: SwPush,
              private newsService: NewsService) {
  }

  ngOnInit() {
  }

  openNav() {
    this.sidenavService.getSidenavRef().open();
  }


  subscribeToNotifications() {
    if (this.swPush.isEnabled) {
      this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
      })
        .then(sub => {
          this.newsService.postSubscription(sub).subscribe();
        })
        .catch(console.error);
    }
  }

}
