import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService){}

  ngOnInit() : void {

  }

  register(){
    if(this.email == ''){
      alert('Please enter your Email');
      return;
    }

    if(this.password == ''){
      alert('Please enter your Password');
      return;
    }

    this.auth.register(this.email, this.password);

    this.email = '';
    this.password = '';    
  }
}
