import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { PostComponent } from './posts/post/post.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { AddPostGuard } from '../common/guard/add-post.guard';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProfileComponent } from './profile/profile.component';
import { HelpSupportComponent } from './help-support/help-support.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'posts', component: PostComponent },
      { path: 'add-post', canActivate: [AddPostGuard], component: AddPostComponent },
      { path: ':id/post-details', component: PostDetailsComponent },
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'help', component: HelpSupportComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
