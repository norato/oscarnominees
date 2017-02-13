import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { CategoriesDataService } from './categories/categories-data.service';


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
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [ CategoriesDataService ],
  bootstrap: [AppComponent]
})

export class AppModule { }

