import { Injectable } from '@angular/core';
import { Difficulty, Achievement, Reward } from './models';

const DEFAULT_DIFFICULTIES: Difficulty[] = [
  { id: 1, name: 'Fácil',    points: 25  },
  { id: 2, name: 'Normal',   points: 50  },
  { id: 3, name: 'Difícil',  points: 100 }
];

@Injectable({ providedIn: 'root' })
export class DataService {
  private difficulties: Difficulty[] = JSON.parse(localStorage.getItem('difficulties') ?? 'null') || DEFAULT_DIFFICULTIES;
  private achievements: Achievement[] = JSON.parse(localStorage.getItem('achievements') ?? '[]');
  private rewards: Reward[] = JSON.parse(localStorage.getItem('rewards') ?? '[]');

  getDifficulties() { return this.difficulties; }
  addDifficulty(d: Difficulty) {
    this.difficulties.push(d);
    this.sync('difficulties', this.difficulties);
  }

  getAchievements() { return this.achievements; }
  addAchievement(a: Achievement) {
    this.achievements.push(a);
    this.sync('achievements', this.achievements);
  }
  completeAchievement(id: number) {
    const ach = this.achievements.find(x => x.id === id);
    if (ach && !ach.completed) {
      ach.completed = true;
      this.sync('achievements', this.achievements);
    }
  }

  getRewards() { return this.rewards; }
  addReward(r: Reward) {
    this.rewards.push(r);
    this.sync('rewards', this.rewards);
  }

  getTotalPoints(): number {
    return this.achievements
      .filter(a => a.completed)
      .reduce((sum, a) => sum + (this.difficulties.find(d => d.id === a.difficultyId)?.points || 0), 0);
  }

  private sync<T>(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
