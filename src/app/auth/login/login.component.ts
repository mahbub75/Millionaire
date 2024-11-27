import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AuthFormComponent} from "../auth-form/auth-form.component";
import {Auth} from "../auth";
import {AuthService} from "../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AuthFormComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
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
