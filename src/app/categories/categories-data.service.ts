import { Injectable } from '@angular/core';
import { Category }   from "./category";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriesDataService {

  private endpoint = 'app/categories/categories.json'

  constructor(private http: Http) { }

  getCategories(){
    return this.http.get(this.endpoint)
               .map(response => <Category[]>response.json().data);
  }
}
