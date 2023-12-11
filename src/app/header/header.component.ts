
import { PostService } from './../post.service';
import { BackEndService } from './../back-end.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // username: string | null; // Define the 'username' property
  email: string = '';
  // imageUrl = localStorage.getItem('imageUrl');

  constructor(private backEndService: BackEndService, private postService: PostService, private route: ActivatedRoute, public authService: AuthService, private fireauth: AngularFireAuth, public router: Router, private userService: UserService) {
    this.authService.emailUpdated.subscribe((email: string) => {
      this.email = email;
      localStorage.setItem('email', email);
  });
    
    // this.username = localStorage.getItem('username'); // get username from local storage
  }

  ngOnInit(): void {

    this.email = localStorage.getItem('email') || '';
    
    
  }

  

  // logout
  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }


  onSave() {
    // this.backEndService.saveData();
  }
  onFetch() {
    this.backEndService.fetchData();
  }


}
