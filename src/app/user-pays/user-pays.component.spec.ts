import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaysComponent } from './user-pays.component';

describe('UserPaysComponent', () => {
  let component: UserPaysComponent;
  let fixture: ComponentFixture<UserPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
