import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-nominees',
  templateUrl: './nominees.component.html',
  styleUrls: ['./nominees.component.css']
})
export class NomineesComponent implements OnInit {

  private categoryId;
  private category;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.forEach(
      (params: Params) => this.categoryId = params['id']
    )
  }

}
