import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticPanelComponent } from './domestic-panel.component';

describe('DomesticPanelComponent', () => {
  let component: DomesticPanelComponent;
  let fixture: ComponentFixture<DomesticPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
