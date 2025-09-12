import { Component, inject } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { ContentfulService } from '../../../services/contentful-service/contentful.service.port';
import { ContentfulServiceAdapter } from '../../../services/contentful-service/contentful.service.adapter';
import { toSignal } from '@angular/core/rxjs-interop';
import { defaultAbout } from '../../../models/about.model';

@Component({
  selector: 'app-navbar-container',
  imports: [Navbar],
  templateUrl: './navbar.container.html',
  styleUrl: './navbar.container.css',
  providers: [
    {
      provide: ContentfulService,
      useClass: ContentfulServiceAdapter
    }
  ] 
})
export class NavbarContainer {
  private contentfulService = inject(ContentfulService);

  about = toSignal(this.contentfulService.getAbout(), { initialValue: defaultAbout });
}
