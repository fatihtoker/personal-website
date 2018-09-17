import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home';
import {ExperienceComponent} from './experience';
import {EducationComponent} from './education';
import {SkillsComponent} from './skills';
import {InterestsComponent} from './interests';
import {ProjectsComponent} from './projects';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: HomeComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'education', component: EducationComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'interests', component: InterestsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule {

}
