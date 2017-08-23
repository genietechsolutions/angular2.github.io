import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapHeaderComponent } from './cap-header.component';

describe('CapHeaderComponent', () => {
  let component: CapHeaderComponent;
  let fixture: ComponentFixture<CapHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
