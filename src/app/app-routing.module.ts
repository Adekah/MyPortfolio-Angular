import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ProjectsComponent } from './components/projects/projects.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'projects', component: ProjectsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
