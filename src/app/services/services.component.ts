import { Component, OnInit } from '@angular/core';
import { ServiceCategory } from '../shared/models/services-category';
import {
  mod_pagespeed_OmnaoLyKcp,
  mod_pagespeed_AyHmkHaUK6
} from './../../assets/js/jquery.magnific-popup.min';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  servicesList: ServiceCategory[] = [];

  constructor() {
    this.servicesList = [
      {
        id: 0,
        icon: '',
        name: 'مشاوره پذیرش تحصیلی',
        caption: 'مشاوره و راهنمایی در خصوص انواع پذیرش از دانشگاه ها و کالج ها',
        image: '029-graduation-cap.png'
      },
      {
        id: 1,
        icon: '',
        name: 'مشاوره آزمون زبان',
        caption: 'مشاوره در خصوص آزمون های زبان نظیر آیلتس, تافل, پی تی ای و غیره و امکاناتی نظیر تصحیح رایتینگ های شما',
        image: '012-diploma.png'
      },
      {
        id: 2,
        icon: '',
        name: 'خرید/اجاره ملک',
        caption: 'خرید و اجاره محل سکونت در کشور مقصد شما',
        image: '007-residence-1.png'
      },
      {
        id: 3,
        icon: '',
        name: 'اسکان یابی',
        caption: 'اجاره اتاق و پیدا کردن هم اتاقی با شرایط دانشجویی',
        image: '033-interior-design.png'
      },
      {
        id: 4,
        icon: '',
        name: 'نوشتن انواع نامه',
        caption: 'نوشتن انواع نامه های تخصصی دانشجویی, کاری و همچنین نامه های مخصوص ویزا',
        image: '019-note.png'
      },
      {
        id: 5,
        icon: '',
        name: 'مشاوره',
        caption: 'مشاوره در حوضه های پذیرش دانشگاه, اخذ انواع ویزا, امور مربوط به اجاره و خرید ملک, کاریابی و غیره ',
        image: '035-consulting.png'
      },
      {
        id: 6,
        icon: '',
        name: 'امور مربوط به ویزا',
        caption: 'راهنمایی و مشاوره و انجام کلیه امور مربوط به ویزا ها مختف',
        image: '031-passport.png'
      },
      {
        id: 7,
        icon: '',
        name: 'ترانسفر شخصی',
        caption: 'ترانسفر شخصی برای شما از فرودگاه تا محل اقامت شما',
        image: '034-sedan.png'
      },
      {
        id: 8,
        icon: '',
        name: 'رویداد های تخصصی',
        caption: 'امکان شرکت در رویداد های تخصصی مهاجرتی, معرفی تازه ترین روش های مهاجرت',
        image: '060-education.png'
      },
      {
        id: 9,
        icon: '',
        name: 'اخذ بورسیه تحصیلی',
        caption: 'ترانسفر شخصی برای شما از فرودگاه تا محل اقامت شما',
        image: '052-scholarship.png'
      },
      {
        id: 10,
        icon: '',
        name: 'پرداخت های اینترنتی',
        caption: 'پرداخت هزینه های اپلیکیشن فی دانشگاه ها و انواع ویزا',
        image: '046-card.png'
      },
      {
        id: 11,
        icon: '',
        name: 'کاریابی بین المللی',
        caption: 'از نوشتن رزومه انگلیسی با نگارش صحیح و حرفه ای تا پیدا کردن جاب آفر برای شما',
        image: '025-satchel.png'
      },


    ];
  }

  ngOnInit(): void {
    eval(mod_pagespeed_AyHmkHaUK6);
    eval(mod_pagespeed_OmnaoLyKcp);
  }

}
