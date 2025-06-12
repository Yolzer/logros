import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },

  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },

  {
    path: 'achievements',
    loadComponent: () => import('./achievements/achievements.page').then( m => m.AchievementsPage)
  },

 {
    path: 'difficulties',
    loadComponent: () => import('./difficulties/difficulties.page').then( m => m.DifficultiesPage)
  },

 {
    path: 'add-difficulty',
    loadComponent: () => import('./add-difficulty/add-difficulty.page').then( m => m.AddDifficultyPage)
  },

  {
    path: 'add-achievement',
    loadComponent: () => import('./add-achievement/add-achievement.page').then( m => m.AddAchievementPage)
  },

  {
    path: 'rewards',
    loadComponent: () => import('./rewards/rewards.page').then( m => m.RewardsPage)
  },

  {
    path: 'add-reward',
    loadComponent: () => import('./add-reward/add-reward.page').then( m => m.AddRewardPage)
  },

  {
    path: 'wheel',
    loadComponent: () => import('./wheel/wheel.page').then( m => m.WheelPage)
  },
];
