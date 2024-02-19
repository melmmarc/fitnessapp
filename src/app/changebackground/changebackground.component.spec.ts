import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangebackgroundComponent } from './changebackground.component';

describe('ChangebackgroundComponent', () => {
  let component: ChangebackgroundComponent;
  let fixture: ComponentFixture<ChangebackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangebackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangebackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
