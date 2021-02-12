// Imports modules.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Imports routes.
import { AppRoutingModule } from './routes/app-routing.module';

// Imports bootstrap
import { AppComponent } from './bootstrap/app.component';

// Imports material
import { material } from "./material/material";
import { HomeComponent } from './pages/home/home.component';

import { ContactComponent } from './pages/contact/contact.component';
import { TwitterUrlPipe } from './pipes/twitter-url.pipe';
import { LinkedinUrlPipe } from './pipes/linkedin-url.pipe';

import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    TwitterUrlPipe,
    LinkedinUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    ComponentsModule,
    ServicesModule,
    material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
