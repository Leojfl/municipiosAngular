import {Component} from '@angular/core';
import {AuthService} from './service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-app';
  authUser = null;

  constructor(private authService: AuthService,
              private route: Router) {
    authService.getUserAuth().subscribe((auth) => {
      this.authUser = auth;
      console.log(this.authUser);
    });
    console.log(this.authUser);
  }
  logout() {
    this.authService.logout();
  }

}
