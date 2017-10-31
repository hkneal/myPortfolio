import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ResumeComponent } from './resume/resume.component';
import { GamesComponent } from './games/games.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CarpentryComponent } from './carpentry/carpentry.component';
import { ParentingComponent } from './parenting/parenting.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    GamesComponent,
    AboutMeComponent,
    CarpentryComponent,
    GamesComponent,
    ParentingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
