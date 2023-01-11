import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateApplicationComponent } from './update-application/update-application.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "addApplication", component: ApplicationFormComponent },
  { path: 'application/:id', component: ApplicationDetailsComponent },
  {path:'updateApplication/:id', component:UpdateApplicationComponent},
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
