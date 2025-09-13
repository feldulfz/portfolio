import { Component, computed, inject, signal } from '@angular/core';
import { TechStack } from "../../components/tech-stack/tech-stack";
import { ContentfulService } from '../../../services/contentful-service/contentful.service.port';
import { ContentfulServiceAdapter } from '../../../services/contentful-service/contentful.service.adapter';
import { toSignal } from '@angular/core/rxjs-interop';
import { Logo } from '../../../models/logo.model';


@Component({
  selector: 'app-techs-container',
  imports: [TechStack],
  templateUrl: './techs.container.html',
  styleUrl: './techs.container.css',
  providers: [
    {
      provide: ContentfulService,
      useClass: ContentfulServiceAdapter
    }
  ]  
})
export class TechsContainer {

  private contentfulService = inject(ContentfulService);

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

}
