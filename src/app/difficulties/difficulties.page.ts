import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Difficulty } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-difficulties',
  templateUrl: './difficulties.page.html',
  styleUrls: ['./difficulties.page.scss'],
  standalone: false
})
export class DifficultiesPage {
  list: Difficulty[] = [];
  constructor(private ds: DataService, private router: Router) {}
  ionViewWillEnter() { this.list = this.ds.getDifficulties(); }
  goAdd() { this.router.navigate(['/add-difficulty']); }
}
