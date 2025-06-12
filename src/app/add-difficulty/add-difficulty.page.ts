import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-difficulty',
  templateUrl: './add-difficulty.page.html',
  styleUrls: ['./add-difficulty.page.scss'],
  standalone: false
})
export class AddDifficultyPage {
  form = this.fb.group({
    name: ['', Validators.required],
    points: [0, [Validators.required, Validators.min(1)]]
  });
  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) {}
  save() {
    if (this.form.valid) {
      const val = this.form.value;
      this.ds.addDifficulty({ id: Date.now(), name: val.name ?? '', points: +(val.points ?? 0) });
      this.router.navigate(['/difficulties']);
    }
  }
}
