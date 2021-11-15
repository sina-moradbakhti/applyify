import { Component, OnInit } from '@angular/core';
import {
  mod_pagespeed_OmnaoLyKcp,
  mod_pagespeed_AyHmkHaUK6
} from './../../assets/js/jquery.magnific-popup.min';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageList: string[] = [
    'work-1.jpg',
    'work-2.jpg',
    'work-3.jpg',
    'work-4.jpg',
    'work-5.jpg',
    'work-6.jpg',
    'work-7.jpg',
    'work-8.jpg',
    'work-9.jpg',
    'work-10.jpg',
    'work-11.jpg',
    'work-12.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
    eval(mod_pagespeed_AyHmkHaUK6);
    eval(mod_pagespeed_OmnaoLyKcp);
  }

}
