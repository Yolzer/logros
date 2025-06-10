import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAchievementPage } from './add-achievement.page';

describe('AddAchievementPage', () => {
  let component: AddAchievementPage;
  let fixture: ComponentFixture<AddAchievementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAchievementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
