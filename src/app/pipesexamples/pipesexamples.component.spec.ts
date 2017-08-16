import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesexamplesComponent } from './pipesexamples.component';

describe('PipesexamplesComponent', () => {
  let component: PipesexamplesComponent;
  let fixture: ComponentFixture<PipesexamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesexamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesexamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
