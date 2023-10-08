import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSevicesComponent } from './our-sevices.component';

describe('OurSevicesComponent', () => {
  let component: OurSevicesComponent;
  let fixture: ComponentFixture<OurSevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurSevicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OurSevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
