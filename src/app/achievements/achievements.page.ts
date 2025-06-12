import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Achievement, Difficulty } from '../models';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
  standalone: false
})
export class AchievementsPage {
  list: Achievement[] = [];
  diffs: Difficulty[] = [];
  constructor(private ds: DataService) {}
  ionViewWillEnter() {
    this.list  = this.ds.getAchievements();
    this.diffs = this.ds.getDifficulties();
  }
  toggle(a: Achievement) {
    this.ds.completeAchievement(a.id);
    this.ionViewWillEnter();
  }
}
