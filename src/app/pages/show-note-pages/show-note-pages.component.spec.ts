import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNotePagesComponent } from './show-note-pages.component';

describe('ShowNotePagesComponent', () => {
  let component: ShowNotePagesComponent;
  let fixture: ComponentFixture<ShowNotePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowNotePagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowNotePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
