import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildGirlComponent } from './child-girl.component';

describe('ChildGirlComponent', () => {
  let component: ChildGirlComponent;
  let fixture: ComponentFixture<ChildGirlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildGirlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildGirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
