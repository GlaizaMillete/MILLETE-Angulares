import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private auth: AuthService){}

  ngOnInit() : void {

  }

  login(){
    if(this.email == ''){
      alert('Please enter your Email');
      return;
    }

    if(this.password == ''){
      alert('Please enter your Password');
      return;
    }

    this.auth.login(this.email, this.password);
    
    this.email = '';
    this.password = '';    
  }
}
