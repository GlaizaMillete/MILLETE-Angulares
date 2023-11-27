
// import { AuthService } from './../auth.service';
import { PostService } from './../post.service';
import { BackEndService } from './../back-end.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  // username: string = '';
  // password: string = '';
  // email: string = '';

  constructor(private backEndService: BackEndService, private postService: PostService, private route: ActivatedRoute, public authService: AuthService, private fireauth: AngularFireAuth, public router: Router){ }

ngOnInit(): void {
    
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
// onSignIn() {
//   this.authService.signIn(this.username, this.password);
// }

// onSignUp() {
//   this.authService.signUp(this.username, this.email, this.password);
// }

onSave(){
  // this.backEndService.saveData();
}
onFetch() {
  this.backEndService.fetchData();
}


}
