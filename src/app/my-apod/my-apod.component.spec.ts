import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApodComponent } from './my-apod.component';

describe('MyApodComponent', () => {
  let component: MyApodComponent;
  let fixture: ComponentFixture<MyApodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyApodComponent]
    });
    fixture = TestBed.createComponent(MyApodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
