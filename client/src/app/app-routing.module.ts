import { AuthGuard } from './shared/auth.guard';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationDetailsComponent } from './components/application-details/application-details.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateApplicationComponent } from './components/update-application/update-application.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "addApplication", component: ApplicationFormComponent, canActivate: [AuthGuard] },
  { path: 'application/:id', component: ApplicationDetailsComponent, canActivate: [AuthGuard] },
  { path: 'updateApplication/:id', component: UpdateApplicationComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: 'dashBoard', component: HeaderComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
