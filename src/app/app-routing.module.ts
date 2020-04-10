import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { InterestsComponent } from './interests/interests.component';


const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"about", component: AboutComponent}, 
  {path:"resume", component:ResumeComponent},
  {path:"interests", component:InterestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
