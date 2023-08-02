import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseRowsComponent } from './collapse-rows.component';

describe('CollapseRowsComponent', () => {
  let component: CollapseRowsComponent;
  let fixture: ComponentFixture<CollapseRowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollapseRowsComponent]
    });
    fixture = TestBed.createComponent(CollapseRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
