import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


// test mio
describe("deberia dar 2", () => {
  let a: string;
  it('and so it a spec', () => {
    a = "a"
    expect(a).toBe("a")
  })
})