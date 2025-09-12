import { TestBed } from '@angular/core/testing';

import { ContentfulService } from './contentful.service.port';
import { ContentfulServiceAdapter } from './contentful.service.adapter';

describe('ContentfulService', () => {
  let service: ContentfulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentfulServiceAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
