import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyFinishComponent } from './case-study-finish.component';

describe('CaseStudyFinishComponent', () => {
  let component: CaseStudyFinishComponent;
  let fixture: ComponentFixture<CaseStudyFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseStudyFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
