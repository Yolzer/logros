import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Páginas
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';
import { AchievementsPage } from './achievements/achievements.page';
import { AddAchievementPage } from './add-achievement/add-achievement.page';
import { DifficultiesPage } from './difficulties/difficulties.page';
import { AddDifficultyPage } from './add-difficulty/add-difficulty.page';
import { RewardsPage } from './rewards/rewards.page';
import { AddRewardPage } from './add-reward/add-reward.page';
import { WheelPage } from './wheel/wheel.page';

// Servicios
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    HomePage,
    AchievementsPage,
    AddAchievementPage,
    DifficultiesPage,
    AddDifficultyPage,
    RewardsPage,
    AddRewardPage,
    WheelPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideRouter(routes)
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
