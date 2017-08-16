import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBhavaniComponent } from './form-bhavani.component';

describe('FormBhavaniComponent', () => {
  let component: FormBhavaniComponent;
  let fixture: ComponentFixture<FormBhavaniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBhavaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBhavaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
