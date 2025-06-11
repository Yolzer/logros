import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'main',
    loadComponent: () => import('./main/main.page').then( m => m.MainPage)
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
    path: 'roulette',
    loadComponent: () => import('./roulette/roulette.page').then( m => m.RoulettePage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'main',
    loadComponent: () => import('./main/main.page').then( m => m.MainPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'achievements',
    loadComponent: () => import('./achievements/achievements.page').then( m => m.AchievementsPage)
  },
  {
    path: 'add-achievement',
    loadComponent: () => import('./add-achievement/add-achievement.page').then( m => m.AddAchievementPage)
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
