import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './user.service';
// import { SettingsComponent } from './settings/settings.component';






const routes: Routes = [
  { path: '', redirectTo: 'post-list', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'user', component: UserService},
  { path: 'profile', component: ProfileComponent},
  // { path: 'settings', component: SettingsComponent},
  { path: 'post-list', component: PostListComponent },
  { path: 'post-add', component: PostEditComponent },
  { path: 'authentication', component: AuthComponent },
  { path: 'post-edit/:index', component: PostEditComponent },
 
];


@NgModule({
  declarations: [AppComponent, AuthComponent, HeaderComponent, PostComponent, PostEditComponent, PostListComponent, LoginComponent, RegisterComponent,ProfileComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), ReactiveFormsModule, HttpClientModule, AngularFireModule.initializeApp(environment.firebase)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
