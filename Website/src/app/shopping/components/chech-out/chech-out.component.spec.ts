import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChechOutComponent } from './chech-out.component';

describe('ChechOutComponent', () => {
  let component: ChechOutComponent;
  let fixture: ComponentFixture<ChechOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChechOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChechOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
