import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsSideBarComponent } from './questions-side-bar.component';

describe('QuestionsSideBarComponent', () => {
  let component: QuestionsSideBarComponent;
  let fixture: ComponentFixture<QuestionsSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
