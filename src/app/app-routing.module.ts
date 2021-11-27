import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserMessagesComponent } from './user-messages/user-messages.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UserPaysComponent } from './user-pays/user-pays.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'category/:id', component: CategoryDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'user/dashboard', component: UserDashboardComponent },
  { path: 'user/pays', component: UserPaysComponent },
  { path: 'user/messages', component: UserMessagesComponent },
  { path: 'user/orders', component: UserOrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
