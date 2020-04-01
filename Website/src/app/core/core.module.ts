import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { DeleteAccountComponent } from './components/delete-account/delete-account.component';
import { ProfileNavbarComponent } from './components/profile-navbar/profile-navbar.component';
<<<<<<< HEAD
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
=======
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
>>>>>>> parent of 6d9cbcf... Merge branch 'master' of https://github.com/SasankaDidula/SugunaTextile

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    ChangePasswordComponent,
    DeleteAccountComponent,
    ProfileNavbarComponent,
<<<<<<< HEAD
    VerifyEmailComponent,
    SignUpComponent,
    SignInComponent,
    MyProfileComponent,
    ForgotPasswordComponent,
=======
    SignInComponent,
    SignUpComponent,
    MyProfileComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
>>>>>>> parent of 6d9cbcf... Merge branch 'master' of https://github.com/SasankaDidula/SugunaTextile
  ],
  exports: [
    BsNavbarComponent,
    ProfileNavbarComponent
  ]
})
export class CoreModule { }
