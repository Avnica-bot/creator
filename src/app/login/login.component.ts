import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'creator-login',
  template: `
    <form>
      <div class="form-group">
        <input #emailControl="ngModel" creatorEmailvalidator hoverColor="black" color="green" type="email" class="form-control" name="email" [(ngModel)]="email" placeholder="Provide your username">
        <!-- <div>{{emailControl.control | json}}</div> -->
      </div>
      <div class="form-group">
        <input hoverColor="orange" color="steelblue" type="password" class="form-control" name="password" [(ngModel)]="password" placeholder="Enter your password">
      </div>
      <div class="form-group">
        <button class="btn btn-primary" (click)="login()">Login</button>
      </div>
    </form>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit(): void {
  }
  
  login() {
    if (this.loginService.login(this.email, this.password)) {

      this.route.navigate(['design/glowing-circle'])
    }
  }

}
