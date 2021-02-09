// Imports modules.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports routes.
import { AppRoutingModule } from './routes/app-routing.module';

// Imports bootstrap
import { AppComponent } from './bootstrap/app.component';

// Imports material
import { material } from "./material/material";
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
