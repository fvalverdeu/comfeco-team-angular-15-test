// Imports modules.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../bootstrap/app.component';
import { HomeComponent } from '../pages/home/home.component';

// Imports pages.

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
