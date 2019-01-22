//app.component / app.module is the "root directory"
//can import hammerjs for certain components - mat-slide-toggle, mat-slider etc.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule, MatCardModule, MatToolbarModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PortfolioComponent } from './portfolio/portfolio.component'
import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

//router imports for navigation -- you don't get redirected to new URLS (if you want that you need href tag)

import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'resume', component: ResumeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutmeComponent,
    ResumeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true} //debugging purposes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }