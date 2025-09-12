import { Component, inject, computed } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { ContentfulService } from '../../../services/contentful-service/contentful.service.port';
import { ContentfulServiceAdapter } from '../../../services/contentful-service/contentful.service.adapter';
import { toSignal } from '@angular/core/rxjs-interop';
import { defaultAbout } from '../../../models/about.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-container',
  imports: [Footer, CommonModule],
  templateUrl: './footer.container.html',
  styleUrl: './footer.container.css',
  providers: [
    {
      provide: ContentfulService,
      useClass: ContentfulServiceAdapter
    }
  ]  
})
export class FooterContainer {
  private contentfulService = inject(ContentfulService);

  about = toSignal(this.contentfulService.getAbout(), { initialValue: defaultAbout });
    
}
