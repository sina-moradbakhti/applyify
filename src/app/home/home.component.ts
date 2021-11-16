// import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { HomeCategory } from '../shared/models/home-category';

import {
  mod_pagespeed_OmnaoLyKcp,
  mod_pagespeed_AyHmkHaUK6
} from './../../assets/js/jquery.magnific-popup.min';

import { AppState } from '../store/appState';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: HomeCategory[] = [];

  constructor() {
    AppState.shared.categories = [
      {
        id: 0,
        code: 'edu-canada',
        flag: 'assets/images/flags/education-canada.jpg',
        image: 'assets/images/canada-education-cat.webp',
        title: 'تحصیل در کانادا',
        children: [
          {
            id: 0,
            code: 'edu-college-canada',
            flag: 'assets/images/flags/education-canada.jpg',
            image: 'assets/images/canada-education-cat-consultant-2.jpg',
            title: 'مشاوره رایگان',
          },
          {
            id: 1,
            code: 'edu-university-canada',
            flag: 'assets/images/flags/education-canada.jpg',
            image: 'assets/images/canada-education-cat-consultant.jpg',
            title: 'مشاوره تخصصی',
          },
          {
            id: 1,
            code: 'edu-university-canada',
            flag: 'assets/images/flags/education-canada.jpg',
            image: 'assets/images/canada-education-cat-language.jpg',
            title: 'مشاوره آیلتس',
          },
          {
            id: 2,
            code: 'edu-university-canada',
            flag: 'assets/images/flags/education-canada.jpg',
            image: 'assets/images/canada-education-cat-sop.jpg',
            title: 'نوشتن نامه SOP',
          },
          {
            id: 3,
            code: 'edu-university-canada',
            flag: 'assets/images/flags/education-canada.jpg',
            image: 'assets/images/canada-education-cat-payment.jpg',
            title: 'پرداخت Application Fee',
          },
          {
            id: 4,
            code: 'edu-university-canada',
            flag: 'assets/images/flags/education-canada.jpg',
            image: 'assets/images/canada-education-cat-apply.jpg',
            title: 'اپلای برای دانشگاه/کالج',
          },
          {
            id: 4,
            code: 'edu-university-canada',
            flag: 'assets/images/flags/education-canada.jpg',
            image: 'assets/images/canada-education-cat-loan.jpg',
            title: 'درخواست بورسیه',
          }
        ]
      }
    ];
    this.categories = AppState.shared.categories;
  }

  ngOnInit(): void {
    eval(mod_pagespeed_AyHmkHaUK6);
    eval(mod_pagespeed_OmnaoLyKcp);
  }

}
