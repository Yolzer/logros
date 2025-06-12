import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage {
  total = 0;
  constructor(private ds: DataService, private router: Router) {}
  ionViewWillEnter() {
    this.total = this.ds.getTotalPoints();
  }
  go(p: string) { this.router.navigate([p]); }
}
