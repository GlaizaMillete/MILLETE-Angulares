import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router ){}

  ngOnInit(): void {

  }

  // login
  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email, password). then( res => {
      localStorage.setItem('token', 'true');
     
      if(res.user?.emailVerified == true) {
        this.router.navigate(['post-list']);
      } else{
        this.router.navigate(['/verify-email']);
      }

    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  // register
  register(email: string, password: string){
    this.fireauth.createUserWithEmailAndPassword(email, password). then( (res) => {
      alert('Registration Successfully');
      this.router.navigate(['/login']);
      this.sendEmailForVerification(res.user);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

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

  // forgot Password
  forgotPassword(email: string){
    this.fireauth.sendPasswordResetEmail(email).then( () => {
      this.router.navigate(['/verify-email']);
    }, err => {
      alert('Something went wrong');
    })
  }

  // email verification
  sendEmailForVerification(user: any) {
    user.sendEmailVerification().then ((res : any) => {
      this.router.navigate(['/verify-email']);
    }, (err : any ) => {
      alert('Something went wrong. Not able to send mail to your email');
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
