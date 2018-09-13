import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'fa fa-home',
        routerLink: ['/']
      },
      {
        label: 'About',
        icon: 'fa fa-info-circle',
        routerLink: ['/about'],
      },
      {
        label: 'Contact',
        icon: 'fa fa-address-card',
        routerLink: ['/contact']
      }
    ];
  }
}
