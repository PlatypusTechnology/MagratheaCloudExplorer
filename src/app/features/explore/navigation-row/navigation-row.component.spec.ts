import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationRowComponent } from './navigation-row.component';

describe('NavigationRowComponent', () => {
  let component: NavigationRowComponent;
  let fixture: ComponentFixture<NavigationRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
