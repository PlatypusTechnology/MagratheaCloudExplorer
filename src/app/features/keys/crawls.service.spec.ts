import { TestBed } from '@angular/core/testing';

import { CrawlsService } from './crawls.service';

describe('CrawlsService', () => {
  let service: CrawlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrawlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
