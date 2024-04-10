import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawlReportComponent } from './crawl-report.component';

describe('CrawlReportComponent', () => {
  let component: CrawlReportComponent;
  let fixture: ComponentFixture<CrawlReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrawlReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrawlReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
