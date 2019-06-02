import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { tokenKey } from '@angular/core/src/view';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    //console.log(this.model);
    this.authService.login(this.model).subscribe(next => {
      console.log('Login succeeded!');
    }, error => {
      console.log('Login failed');
    });
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(){
    localStorage.removeItem('token');
    console.log('Logged out');
  }

}
