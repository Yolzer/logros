import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDifficultyPage } from './add-difficulty.page';

describe('AddDifficultyPage', () => {
  let component: AddDifficultyPage;
  let fixture: ComponentFixture<AddDifficultyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDifficultyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
