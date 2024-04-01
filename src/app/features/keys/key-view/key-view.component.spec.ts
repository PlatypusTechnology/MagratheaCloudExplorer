import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyViewComponent } from './key-view.component';

describe('KeyViewComponent', () => {
  let component: KeyViewComponent;
  let fixture: ComponentFixture<KeyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
