import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  items = [];

  constructor() { }

  ngOnInit() {
    this.items.push(
      {
        title: 'PBYS',
        techs: [
          {
            icon: 'fab fa-php',
            tooltip: 'with Symfony'
          },
          {
            icon: 'fab fa-angular',
            tooltip: 'version 5.2'
          }
        ],
        desc: 'A large platform with several components for university personnel.',
        href: 'https://pbys.anadolu.edu.tr'
      },
      {
        title: 'Anadolu University Website',
        techs: [
          {
            icon: 'fab fa-php',
            tooltip: 'with Laravel'
          }
        ],
        desc: 'Anadolu University main website.',
        href: 'https://anadolu.edu.tr'
      },
      {
        title: 'Academic Platform',
        techs: [
          {
            icon: 'fab fa-angular',
            tooltip: 'version 4.0'
          }
        ],
        desc: 'Academic information of the university personnel.(Username should be written in the URL.' +
        ' Don\'t write any due to ethic reasons.)',
        href: 'https://akademik.anadolu.edu.tr'
      },
      {
        title: 'AosDestek',
        techs: [
          {
            icon: 'fab fa-php',
            tooltip: 'with Symfony'
          },
          {
            icon: 'fab fa-angular',
            tooltip: 'version 5.2'
          }
        ],
        desc: 'Support platform for Anadolu University Open Education System.',
        href: 'https://aosdestek.anadolu.edu.tr'
      },
      {
        title: 'Anadolu-Ui',
        techs: [
          {
            icon: 'fab fa-angular',
            tooltip: 'version 5.2'
          }
        ],
        desc: 'An Angular UI Library with a lot of custom components inside. It is used ' +
        'in other projects. (External link of the library remains secret. One of the projects that uses this ' +
        'library is given instead.)',
        href: 'https://pbys.anadolu.edu.tr'
      },
      {
        title: 'Haze',
        techs: [
          {
            icon: 'fab fa-angular',
            tooltip: 'with Firebase'
          },
          {
            icon: 'fab fa-spotify',
            tooltip: 'with Auth, Profile, Search etc.'
          }
        ],
        desc: 'A music discovery web app with Angular 5, Firebase, Spotify Web API.',
        href: 'https://github.com/fatihtoker/haze-app'
      },
      {
        title: 'BoBo',
        techs: [
          {
            icon: 'fab fa-python',
            tooltip: 'with Django'
          }
        ],
        desc: 'A social advertising & communication web application. (Group thesis project for ' +
        'bachelor\'s degree )',
        href: 'https://github.com/barhantas/bobo'
      }
    );
  }

}
