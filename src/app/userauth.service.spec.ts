import { TestBed, inject } from '@angular/core/testing';

import { UserAuthService } from './userauth.service';

describe('UserauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAuthService]
    });
  });

  it('should be created', inject([UserAuthService], (service: UserAuthService) => {
    expect(service).toBeTruthy();
  }));
});
