import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ImgDelgadilloComponent } from './components/img-delgadillo/img-delgadillo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImgDelgadilloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
