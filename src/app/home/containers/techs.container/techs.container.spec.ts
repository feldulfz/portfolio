import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechsContainer } from './techs.container';

describe('TechsContainer', () => {
  let component: TechsContainer;
  let fixture: ComponentFixture<TechsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechsContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
