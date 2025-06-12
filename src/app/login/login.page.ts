import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  form = this.fb.group({
    user: ['', Validators.required],
    pass: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private router: Router) {}
  onSubmit() {
    if (this.form.valid) {
      // simula login
      this.router.navigate(['/home']);
    }
  }
}
