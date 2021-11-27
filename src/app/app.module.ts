import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { SigninComponent } from './signin/signin.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { UserDashboardSidebarComponent } from './user-dashboard-sidebar/user-dashboard-sidebar.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UserMessagesComponent } from './user-messages/user-messages.component';
import { UserPaysComponent } from './user-pays/user-pays.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    CategoryDetailComponent,
    BlogComponent,
    SigninComponent,
    UserDashboardComponent,
    BlogSingleComponent,
    UserDashboardSidebarComponent,
    UserOrdersComponent,
    UserMessagesComponent,
    UserPaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
