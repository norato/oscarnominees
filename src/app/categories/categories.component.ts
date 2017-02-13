import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoriesDataService } from './categories-data.service';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(
    private categoriesDataService: CategoriesDataService
  ) {}

  ngOnInit() {
    this.categoriesDataService.getCategories()
        .subscribe(categories => this.categories = categories);
  }

}
