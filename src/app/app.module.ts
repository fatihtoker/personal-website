import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ExperienceComponent } from './experience';
import { EducationComponent } from './education';
import { SkillsComponent } from './skills';
import { InterestsComponent } from './interests';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ProjectsComponent } from './projects';
import {DataService} from './data.service';
import {NgProgressModule} from '@ngx-progressbar/core';
import {NgProgressRouterModule} from '@ngx-progressbar/router';
import { PageComponent } from './page/page.component';
import { QuarantineClockComponent } from './quarantine-clock/quarantine-clock.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent,
    ProjectsComponent,
    PageComponent,
    QuarantineClockComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgbTooltipModule.forRoot(),
    FlexLayoutModule,
    NgProgressModule.forRoot({color: '#fdcb2f'}),
    NgProgressRouterModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
