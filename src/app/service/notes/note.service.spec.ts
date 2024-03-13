import { TestBed } from '@angular/core/testing';

import { SaveNoteService } from './note.service';

describe('SaveNoteService', () => {
  let service: SaveNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
