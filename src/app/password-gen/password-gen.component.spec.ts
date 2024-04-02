import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordGenComponent } from './password-gen.component';

describe('PasswordGenComponent', () => {
  let component: PasswordGenComponent;
  let fixture: ComponentFixture<PasswordGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordGenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
