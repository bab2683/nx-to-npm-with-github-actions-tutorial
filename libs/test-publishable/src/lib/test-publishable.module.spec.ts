import { async, TestBed } from '@angular/core/testing';
import { TestPublishableModule } from './test-publishable.module';

describe('TestPublishableModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestPublishableModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TestPublishableModule).toBeDefined();
  });
});
