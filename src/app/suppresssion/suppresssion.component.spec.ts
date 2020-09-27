import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppresssionComponent } from './suppresssion.component';

describe('SuppresssionComponent', () => {
  let component: SuppresssionComponent;
  let fixture: ComponentFixture<SuppresssionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppresssionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppresssionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
