import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home';
import {ExperienceComponent} from './experience';
import {EducationComponent} from './education';
import {SkillsComponent} from './skills';
import {InterestsComponent} from './interests';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'education', component: EducationComponent},
  { path: 'skills', component: SkillsComponent},
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
