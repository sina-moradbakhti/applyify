import { Component, OnInit } from '@angular/core';
import { HomeCategory, HomeSubCategory } from '../shared/models/home-category';

import { ActivatedRoute } from '@angular/router';
import { AppState } from '../store/appState';


@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  categories: HomeCategory[] = [];

  selectedCode: string = '';
  selectedChildren: HomeSubCategory[] = [];

  constructor(private _Activatedroute:ActivatedRoute) {
    this.selectedCode = _Activatedroute.snapshot.paramMap.get('id') ?? '';
    this.categories = AppState.shared.categories;
  }

  ngOnInit(): void {
    this.selectedChildren = this.categories.filter((a)=> a.code === this.selectedCode)[0].children ?? [];
  }

}
