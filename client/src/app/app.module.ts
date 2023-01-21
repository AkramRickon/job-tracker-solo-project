import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { JobStatusComponent } from './job-status/job-status.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { ApplicationItemComponent } from './components/application-item/application-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApplicationDetailsComponent } from './components/application-details/application-details.component';
import { UpdateApplicationComponent } from './components/update-application/update-application.component';
import { RegisterComponent } from './components/register/register.component';
import { JobApplicationStatisticsComponent } from './components/job-application-statistics/job-application-statistics.component';
import { JobStatisticsCardComponent } from './components/job-statistics-card/job-statistics-card.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ApplicationFormComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    // JobStatusComponent,
    ApplicationListComponent,
    ApplicationItemComponent,
    ApplicationDetailsComponent,
    UpdateApplicationComponent,
    RegisterComponent,
    JobApplicationStatisticsComponent,
    JobStatisticsCardComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
