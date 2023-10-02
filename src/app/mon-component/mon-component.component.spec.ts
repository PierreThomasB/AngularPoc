import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonComponentComponent } from './mon-component.component';

describe('MonComponentComponent', () => {
  let component: MonComponentComponent;
  let fixture: ComponentFixture<MonComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonComponentComponent]
    });
    fixture = TestBed.createComponent(MonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
