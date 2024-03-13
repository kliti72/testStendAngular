import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPublicNotesComponent } from './user-public-notes.component';

describe('UserPublicNotesComponent', () => {
  let component: UserPublicNotesComponent;
  let fixture: ComponentFixture<UserPublicNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPublicNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPublicNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
