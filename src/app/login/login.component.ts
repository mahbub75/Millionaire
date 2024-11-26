import { Component } from '@angular/core';
import {AuthFormComponent} from "../core/auth/auth-form/auth-form.component";
import {Auth} from "../core/auth/auth";
import {AuthService} from "../core/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AuthFormComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  protected login(date: Auth): void {
    this.authService.login(date).subscribe(() => {
      this.router.navigate(['/quiz']);
    })
  }
}
