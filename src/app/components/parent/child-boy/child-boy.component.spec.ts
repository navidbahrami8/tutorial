import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBoyComponent } from './child-boy.component';

describe('ChildBoyComponent', () => {
  let component: ChildBoyComponent;
  let fixture: ComponentFixture<ChildBoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildBoyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildBoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
