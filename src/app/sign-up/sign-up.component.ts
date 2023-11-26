// import { Component } from '@angular/core';
// import { AuthService } from '../auth.service';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-sign-up',
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.css']
// })
// export class SignUpComponent {

//   username: string = '';
//   password: string = '';
//   email: string = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   signUp(): void {
//     const signUpSuccess = this.authService.signUp(this.username, this.email, this.password);
//     if (signUpSuccess) {
//       console.log('Sign Up Successful');
//       // Navigate to SignIn page
//       this.router.navigate(['/sign-in']);
//     } else {
//       console.log('Username already exists');
//       // Handle the case where the username already exists
//     }
//   }
// }
