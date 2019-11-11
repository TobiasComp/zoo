import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticCardComponent } from './domestic-card.component';

describe('DomesticCardComponent', () => {
  let component: DomesticCardComponent;
  let fixture: ComponentFixture<DomesticCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
