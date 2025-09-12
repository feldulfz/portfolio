import { Component, inject, computed } from '@angular/core';
import { AboutMe } from "../../components/about-me/about-me";
import { ContentfulService } from '../../../services/contentful-service/contentful.service.port';
import { ContentfulServiceAdapter } from '../../../services/contentful-service/contentful.service.adapter';
import { toSignal } from '@angular/core/rxjs-interop';
import { defaultAbout } from '../../../models/about.model';

@Component({
  selector: 'app-about-container',
  imports: [AboutMe],
  templateUrl: './about.container.html',
  styleUrl: './about.container.css',
  providers: [
    {
      provide: ContentfulService,
      useClass: ContentfulServiceAdapter
    }
  ]
})
export class AboutContainer {
  private contentfulService = inject(ContentfulService);
  
  about = toSignal(this.contentfulService.getAbout(), { initialValue: defaultAbout });

}
