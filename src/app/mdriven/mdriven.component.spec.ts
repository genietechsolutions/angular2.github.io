import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdrivenComponent } from './mdriven.component';

describe('MdrivenComponent', () => {
  let component: MdrivenComponent;
  let fixture: ComponentFixture<MdrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
