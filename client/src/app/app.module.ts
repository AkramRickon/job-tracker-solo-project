import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JobStatusComponent } from './job-status/job-status.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationItemComponent } from './application-item/application-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { UpdateApplicationComponent } from './update-application/update-application.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ApplicationFormComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    JobStatusComponent,
    ApplicationListComponent,
    ApplicationItemComponent,
    ApplicationDetailsComponent,
    UpdateApplicationComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
