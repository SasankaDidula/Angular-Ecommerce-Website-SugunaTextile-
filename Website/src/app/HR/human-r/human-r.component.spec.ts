import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanRComponent } from './human-r.component';

describe('HumanRComponent', () => {
  let component: HumanRComponent;
  let fixture: ComponentFixture<HumanRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
