import { computed, inject, Injectable } from '@angular/core';
import { ContentfulService } from '../contentful-service/contentful.service.port';
import { defaultAbout } from '../../models/about.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { Logo } from '../../models/logo.model';
import { Project } from '../../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioContentService {
  private contentfulService = inject(ContentfulService);

  about = toSignal(this.contentfulService.getAbout(), { initialValue: defaultAbout });


  // Tech stack and tools    
  logosSignal = toSignal(this.contentfulService.getLogos(), { initialValue: [] });

  logoTechsSignal = computed(() =>
    this.logosSignal()
      .filter((l: Logo) => l.category === 'tech')
      .sort((a, b) => a.sortOrder - b.sortOrder)
  );

  logoToolsSignal = computed(() =>
    this.logosSignal()
      .filter((l: Logo) => l.category === 'tool')
      .sort((a, b) => a.sortOrder - b.sortOrder)
  );  

  // project
  projectsSignal = toSignal(this.contentfulService.getProjects(), { initialValue: [] });
  
  webProjectsSignal = computed(() => 
    this.projectsSignal()
      .filter((p: Project) => p.category === 'web')
      .sort((a, b) => a.sortOrder - b.sortOrder)
    );

  appProjectsSignal = computed(() => 
    this.projectsSignal()
      .filter((p: Project) => p.category === 'app')
      .sort((a, b) => a.sortOrder - b.sortOrder)
  );

  otherProjectsSignal = computed(() => 
    this.projectsSignal()
      .filter((p: Project) => p.category === 'others')
      .sort((a, b) => a.sortOrder - b.sortOrder)
    ); 
    
  certificatesSignal = computed(() => 
    this.projectsSignal()
      .filter((p: Project) => p.category === 'certificate')
      .sort((a, b) => a.sortOrder - b.sortOrder)
    );     
}
