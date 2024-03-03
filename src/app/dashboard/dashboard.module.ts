import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './posts/post/post.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProfileComponent } from './profile/profile.component';
import { HelpSupportComponent } from './help-support/help-support.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    PostComponent,
    AddPostComponent,
    PostDetailsComponent,
    DashboardPageComponent,
    AboutUsComponent,
    ProfileComponent,
    HelpSupportComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
