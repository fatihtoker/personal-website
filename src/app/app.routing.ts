import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home";
import { ExperienceComponent } from "./experience";
import { EducationComponent } from "./education";
import { SkillsComponent } from "./skills";
import { InterestsComponent } from "./interests";
import { ProjectsComponent } from "./projects";
import { PageComponent } from "./page/page.component";
import { QuarantineClockComponent } from "./quarantine-clock/quarantine-clock.component";

const routes: Routes = [
  {
    path: "",
    component: PageComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "about", component: HomeComponent },
      { path: "experience", component: ExperienceComponent },
      { path: "education", component: EducationComponent },
      { path: "skills", component: SkillsComponent },
      { path: "projects", component: ProjectsComponent },
      { path: "interests", component: InterestsComponent },
    ],
  },
  {path: "quarantine-clock/privacy", component: QuarantineClockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
