import {Component} from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public static authUser = null;

  public authUser1;
  public static admin = false;

  constructor(private authService: AuthService,
              private route: Router) {
    this.authUser1 = AppComponent.authUser;
    if (AppComponent.authUser == null) {
      this.route.navigate(['login']);
      authService.getUserAuth().subscribe((auth) => {
        AppComponent.authUser = auth;
        this.authUser1 = AppComponent.authUser;
        try {
          const email = auth.email;
          if (auth.email != null) {
            AppComponent.admin = true;
          }
        } catch (e) {
          AppComponent.admin = false;
        }
        if (auth != null) {
          this.route.navigate(['municipalities']);
        }
      });
    }
  }


  logout() {
    this.authService.logout().then(r => this.route.navigate(['login']));
  }

}
