import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from './user.model';
import { UserService } from './user.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  emailUpdated = new BehaviorSubject<string>('');


  constructor(private fireauth: AngularFireAuth, private router: Router, private userService: UserService ){
    const email = this.getCurrentEmail();
    this.emailUpdated.next(email);
  }

  getCurrentEmail(): string {
    return localStorage.getItem('email') || '';
  }

  ngOnInit(): void {

  }

  // getCurrentUserId(): Promise<string | null> {
  //   return this.fireauth.currentUser.then(user => user ? user.uid : null);
  // }
  
  // login
  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email, password).then( res => {
      localStorage.setItem('token', 'true');
      // Fetch the user's data from your backend or Firebase
      if (res.user) {
        this.userService.getUser(res.user.uid).subscribe((user: any) => {
          // localStorage.setItem('username', user.username); // Update the username in the local storage
        });
        localStorage.setItem('email', res.user.email || '');
        this.emailUpdated.next(res.user.email || '');
      }
      this.router.navigate(['post-list']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  // register
  register(email: string, password: string){ // add username parameter
    this.fireauth.createUserWithEmailAndPassword(email, password). then( (res) => {
      alert('Registration Successfully');

      if (res.user){
        localStorage.setItem('email', res.user.email || '');
        this.emailUpdated.next(res.user.email || '');
      }
      // localStorage.setItem('username', username); // store username in local storage
      this.router.navigate(['/login']);
      // this.sendEmailForVerification(res.user);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  // isloggenIn
  isloggedIn(){
    return this.router.url === '/post-list';
  }

  // logout
  logout(){
    this.fireauth.signOut(). then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  } 

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
