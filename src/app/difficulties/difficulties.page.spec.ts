import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DifficultiesPage } from './difficulties.page';

describe('DifficultiesPage', () => {
  let component: DifficultiesPage;
  let fixture: ComponentFixture<DifficultiesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DifficultiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
