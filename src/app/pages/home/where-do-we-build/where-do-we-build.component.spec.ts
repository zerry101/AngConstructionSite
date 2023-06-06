import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereDoWeBuildComponent } from './where-do-we-build.component';

describe('WhereDoWeBuildComponent', () => {
  let component: WhereDoWeBuildComponent;
  let fixture: ComponentFixture<WhereDoWeBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereDoWeBuildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhereDoWeBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
