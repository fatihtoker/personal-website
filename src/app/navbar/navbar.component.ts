import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  displayState = 'none';
  menus = [];
  constructor() {
  }
  ngOnInit() {
    this.menus.push(
      {
        name: 'About',
        routerLink: '/about',
        active: false
      },
      {
        name: 'Experience',
        routerLink: '/experience',
        active: false
      },
      {
        name: 'Education',
        routerLink: '/education',
        active: false
      },
      {
        name: 'Skills',
        routerLink: '/skills',
        active: false
      },
      {
        name: 'Projects',
        routerLink: '/projects',
        active: false
      },
      {
        name: 'Interests',
        routerLink: '/interests',
        active: false
      }
      );
  }

  toggleMenu(routerLink = '') {
    if (this.displayState === 'block') {
      this.displayState = 'none';
    } else {
      this.displayState = 'block';
    }
    for (const i of this.menus) {
      if (i.routerLink === routerLink) {
        i.active = true;
        continue;
      }
      i.active = false;
    }
  }
}
