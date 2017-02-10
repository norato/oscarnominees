import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'categories', component: CategoriesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

