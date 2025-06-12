import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-reward',
  templateUrl: './add-reward.page.html',
  styleUrls: ['./add-reward.page.scss'],
  standalone: false
})
export class AddRewardPage {
  form = this.fb.group({
    name: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) {}
  save() {
    if (this.form.valid) {
      const val = this.form.value;
      this.ds.addReward({ id: Date.now(), name: val.name! });
      this.router.navigate(['/rewards']);
    }
  }
}
