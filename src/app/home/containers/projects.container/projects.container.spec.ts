import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsContainer } from './projects.container';

describe('ProjectsContainer', () => {
  let component: ProjectsContainer;
  let fixture: ComponentFixture<ProjectsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
