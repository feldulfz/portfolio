import { Component, computed, inject } from '@angular/core';
import { ProjectCard } from "../../components/project-card/project-card";
import { MatTabsModule } from '@angular/material/tabs';
import { ContentfulService } from '../../../services/contentful-service/contentful.service.port';
import { ContentfulServiceAdapter } from '../../../services/contentful-service/contentful.service.adapter';
import { toSignal } from '@angular/core/rxjs-interop';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-projects-container',
  imports: [ MatTabsModule, ProjectCard],
  templateUrl: './projects.container.html',
  styleUrl: './projects.container.css',
  providers: [
    {
      provide: ContentfulService,
      useClass: ContentfulServiceAdapter
    }
  ]   
})
export class ProjectsContainer {

  private contentfulService = inject(ContentfulService);

  projectsSignal = toSignal(this.contentfulService.getProjects(), { initialValue: [] });
  
  webProjects = computed(() => this.projectsSignal().filter((p: Project) => p.category === 'web'));
  appProjects = computed(() => this.projectsSignal().filter((p: Project) => p.category === 'app'));
  otherProjects = computed(() => this.projectsSignal().filter((p: Project) => p.category === 'others'));  

}

