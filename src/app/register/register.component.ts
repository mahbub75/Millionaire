import {Component} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {Auth} from "../core/auth/auth";
import {AuthService} from "../core/auth/auth.service";
import {AuthFormComponent} from "../core/auth/auth-form/auth-form.component";
import {Router} from "@angular/router";
import {data} from "autoprefixer";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    AuthFormComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
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
