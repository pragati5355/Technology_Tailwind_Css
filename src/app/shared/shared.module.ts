import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    LoginModalComponent,
    AlertMessageComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [NavbarComponent,SidebarComponent,LoginModalComponent,AlertMessageComponent]
})
export class SharedModule { }
