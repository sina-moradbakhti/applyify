import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard-sidebar',
  templateUrl: './user-dashboard-sidebar.component.html',
  styleUrls: ['./user-dashboard-sidebar.component.scss']
})
export class UserDashboardSidebarComponent implements OnInit {
  currentRoute: string = '';
  constructor(private router: Router) {
    this.currentRoute = this.router.url;
  }

  getActiveClass(param: string) {
    if (this.currentRoute == '/' + param)
      return 'active';
    else return '';
  }

  ngOnInit(): void {
  }

}
