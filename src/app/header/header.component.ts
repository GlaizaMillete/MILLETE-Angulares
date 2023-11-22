// import { AuthService } from './../auth.service';
import { PostService } from './../post.service';
import { BackEndService } from './../back-end.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  username: string = '';
  password: string = '';

  constructor(private backEndService: BackEndService, private postService: PostService, private route: ActivatedRoute, private authService: AuthService){ }

ngOnInit(): void {
    
}
onSignIn() {
  this.authService.signIn(this.username, this.password);
}

onSignUp() {
  this.authService.signUp(this.username, this.password);
}

onSave(){
  // this.backEndService.saveData();
}
onFetch() {
  this.backEndService.fetchData();
}


}
