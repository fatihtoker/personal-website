import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  items = [];
  errors = {};
  path = '/../../assets/data/projects/projects.json';

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.getData();
  }
  private getData() {
    this.dataService.get(this.path).subscribe(data => {
      this.items = data.data;
    }, err => {
      this.errors = err;
    });
  }
}
