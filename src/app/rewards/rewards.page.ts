import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Reward } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
  standalone: false
})
export class RewardsPage {
  list: Reward[] = [];
  constructor(private ds: DataService, private router: Router) {}
  ionViewWillEnter() { this.list = this.ds.getRewards(); }
  goAdd() { this.router.navigate(['/add-reward']); }
}
