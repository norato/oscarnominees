import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CategoriesComponent } from './categories/categories.component';
import { CategoriesDataService } from './categories/categories-data.service';

import { MoviesComponent } from './movies/movies.component';
import { MoviesDataService } from './movies/movies-data.service';
import { NomineesComponent } from './nominees/nominees.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:id', component: NomineesComponent },
  { path: 'movies', component: MoviesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HomeComponent,
    MoviesComponent,
    NomineesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [
    CategoriesDataService,
    MoviesDataService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

