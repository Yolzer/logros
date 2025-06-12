import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-achievement',
  templateUrl: './add-achievement.page.html',
  styleUrls: ['./add-achievement.page.scss'],
  standalone: false
})
export class AddAchievementPage {
  form = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    difficultyId: [1, Validators.required]
  });
  diffs = this.ds.getDifficulties();
  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) {}
  save() {
    if (this.form.valid) {
      const val = this.form.value;
      this.ds.addAchievement({
        id: Date.now(),
        title: val.title ?? '',
        description: val.description ?? undefined,
        difficultyId: +(val.difficultyId ?? 1),
        completed: false
      });
      this.router.navigate(['/achievements']);
    }
  }
}
