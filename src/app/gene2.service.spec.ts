import { TestBed } from '@angular/core/testing';

import { GeneService } from './gene2.service';

describe('Gene2Service', () => {
  let service: GeneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
