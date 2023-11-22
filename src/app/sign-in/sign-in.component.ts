import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}


  signIn(): void {
    const signInSuccess = this.authService.signIn(this.username, this.password);
    if (signInSuccess) {
      console.log('Sign In Successful');
      // Optionally, you might want to navigate or perform an action upon successful signin
    } else {
      console.log('Invalid username or password');
      // Handle the case where the provided credentials are invalid
    }
  }
}
