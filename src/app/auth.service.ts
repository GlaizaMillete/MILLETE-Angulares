import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private users: { username: string, email: string, password: string }[] = [];

  // constructor(private router: Router) {
  //   // Example user data (for demonstration)
  //   this.users.push({ username: 'user1', email: 'user1',password: 'password1' });
  //   this.users.push({ username: 'user2', email: 'user1',password: 'password2' });
  // }

  // signUp(username: string, email: string, password: string): boolean {
  //   const existingUser = this.users.find(user => user.username === username);
  //   if (existingUser) {
  //     return false; // Username already exists
  //   }
  
  //   // If the username doesn't exist, add the user
  //   this.users.push({ username, email, password });
  //   this.router.navigate(['/sign-in']); // Navigate to SignIn page
  //   return true; // SignUp successful
  // }
  
  // signIn(username: string, password: string): boolean {
  //   const user = this.users.find(user => user.username === username && user.password === password);
  //   if (user) {
  //     this.router.navigate(['/post-list']); // Navigate to Home page
  //     return true; // SignIn successful
  //   }
  
  //   return false; // SignIn failed
  // }
}
