import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Auth} from "../auth";

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    ReactiveFormsModule
  ],
  templateUrl: './auth-form.component.html',
})
export class AuthFormComponent implements OnInit {
  @Input({required: true}) title!: string;
  @Output() submitted = new EventEmitter<Auth>();
  protected form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  protected onsubmit() {
    this.submitted.emit(this.form.value);
  }
}
