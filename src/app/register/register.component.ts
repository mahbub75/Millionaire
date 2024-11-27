import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Auth} from "../core/auth/auth";
import {AuthService} from "../core/auth/auth.service";
import {AuthFormComponent} from "../core/auth/auth-form/auth-form.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    AuthFormComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  protected register(date: Auth): void {
    this.authService.register(date).subscribe(() => {
      this.router.navigate(['login']);
    })
  }
}
