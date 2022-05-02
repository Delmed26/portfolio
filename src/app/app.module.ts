import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ImgDelgadilloComponent } from './components/img-delgadillo/img-delgadillo.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PinnedProjectsComponent } from './components/pinned-projects/pinned-projects.component';
import { OtherProjectsComponent } from './components/other-projects/other-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImgDelgadilloComponent,
    BannerComponent,
    ProjectsComponent,
    PinnedProjectsComponent,
    OtherProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
