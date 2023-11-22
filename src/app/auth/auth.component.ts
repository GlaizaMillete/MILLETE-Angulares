import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  // username: string = '';
  // password: string = '';

  // constructor(private authService: AuthService, private router: Router) {}

  // signUp(): void {
  //   const signUpSuccess = this.authService.signUp(this.username, this.password);
  //   if (signUpSuccess) {
  //     console.log('Sign Up Successful');
  //     // Navigate to SignIn page
  //     this.router.navigate(['/sign-in']);
  //   } else {
  //     console.log('Username already exists');
  //     // Handle the case where the username already exists
  //   }
  // }

  // signIn(): void {
  //   const signInSuccess = this.authService.signIn(this.username, this.password);
  //   if (signInSuccess) {
  //     console.log('Sign In Successful');
  //     // Optionally, you might want to navigate or perform an action upon successful signin
  //   } else {
  //     console.log('Invalid username or password');
  //     // Handle the case where the provided credentials are invalid
  //   }
  // }
}