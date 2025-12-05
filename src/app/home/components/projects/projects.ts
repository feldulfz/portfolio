import { Component, input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ProjectCard } from './project-card/project-card';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-projects',
  imports: [MatTabsModule, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  webProjects = input<Project[]>([]);
  appProjects = input<Project[]>([]);
  otherProjects = input<Project[]>([]);
  certificates = input<Project[]>([]);
}
