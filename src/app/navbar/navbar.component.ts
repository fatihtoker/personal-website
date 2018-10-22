import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  displayState = 'none';
  menus = [];
  errors = [];
  path = '/../../assets/data/navbar-menus/navbar-menus.json';
  constructor(private dataService: DataService) {
  }
  ngOnInit() {
    this.getData();
  }
  private getData() {
    this.dataService.get(this.path).subscribe(data => {
      this.menus = data.data;
    }, err => {
      this.errors = err;
    });
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
