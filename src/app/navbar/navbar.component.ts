import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  displayState = 'none';
  menus = [];
  ngOnInit() {
    this.menus.push(
      {
        name: 'About',
        routerLink: '/about',
      },
      {
        name: 'Experience',
        routerLink: '/experience'
      },
      {
        name: 'Education',
        routerLink: '/education'
      },
      {
        name: 'Skills',
        routerLink: '/skills'
      },
      {
        name: 'Projects',
        routerLink: '/projects'
      },
      {
        name: 'Interests',
        routerLink: '/interests'
      }
      );
  }

  toggleMenu() {
    if (this.displayState === 'block') {
      this.displayState = 'none';
    } else {
      this.displayState = 'block';
    }
  }
}
