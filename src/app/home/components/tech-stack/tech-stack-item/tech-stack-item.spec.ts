import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackItem } from './tech-stack-item';

describe('TechStackItem', () => {
  let component: TechStackItem;
  let fixture: ComponentFixture<TechStackItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechStackItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechStackItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
