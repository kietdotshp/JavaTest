import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamJavaComponent } from './exam-java.component';

describe('ExamJavaComponent', () => {
  let component: ExamJavaComponent;
  let fixture: ComponentFixture<ExamJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamJavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
