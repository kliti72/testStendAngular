import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLoginButtonComponent } from './app-login-button.component';

describe('AppLoginButtonComponent', () => {
  let component: AppLoginButtonComponent;
  let fixture: ComponentFixture<AppLoginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppLoginButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppLoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
