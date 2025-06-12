import { Component, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { Reward } from '../models';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.page.html',
  styleUrls: ['./wheel.page.scss'],
  standalone: false
})
export class WheelPage {
  @ViewChild('wheel',{ static: true }) wheel!: ElementRef<HTMLDivElement>;
  rewards: Reward[] = [];
  spinning = false;

  constructor(private ds: DataService) {}

  ionViewWillEnter() {
    this.rewards = this.ds.getRewards();
  }

  spin() {
    if (this.spinning || this.rewards.length === 0) return;
    this.spinning = true;
    const slices = this.rewards.length;
    const degPer = 360 / slices;
    const randomIndex = Math.floor(Math.random() * slices);
    const stopAt = 360 * 5 + (slices - randomIndex) * degPer - degPer/2;
    this.wheel.nativeElement.style.transition = 'transform 4s ease-out';
    this.wheel.nativeElement.style.transform = `rotate(${stopAt}deg)`;
    setTimeout(() => {
      alert(`¡Obtuviste: ${this.rewards[randomIndex].name}!`);
      this.spinning = false;
    }, 4000);
  }
}
