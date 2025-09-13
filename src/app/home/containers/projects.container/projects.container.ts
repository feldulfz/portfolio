import { Component, computed, inject } from '@angular/core';
import { ContentfulService } from '../../../services/contentful-service/contentful.service.port';
import { ContentfulServiceAdapter } from '../../../services/contentful-service/contentful.service.adapter';
import { toSignal } from '@angular/core/rxjs-interop';
import { Project } from '../../../models/project.model';
import { Projects } from "../../components/projects/projects";

@Component({
  selector: 'app-projects-container',
  imports: [Projects],
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
  
  webProjectsSignal = computed(() => this.projectsSignal().filter((p: Project) => p.category === 'web'));
  appProjectsSignal = computed(() => this.projectsSignal().filter((p: Project) => p.category === 'app'));
  otherProjectsSignal = computed(() => this.projectsSignal().filter((p: Project) => p.category === 'others'));  

}

