import { TestBed } from '@angular/core/testing';

import { PortfolioContentService } from './portfolio-content.service';

describe('PortfolioContentService', () => {
  let service: PortfolioContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
