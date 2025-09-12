import { Component, inject, computed } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Contentful } from '../../../services/contentful';
import { toSignal } from '@angular/core/rxjs-interop';
import { defaultAbout } from '../../../models/about.model';

@Component({
  selector: 'app-footer-container',
  imports: [Footer],
  templateUrl: './footer.container.html',
  styleUrl: './footer.container.css'
})
export class FooterContainer {
  private contentfulService = inject(Contentful);

  about = toSignal(this.contentfulService.getAbout(), { initialValue: defaultAbout });
    
}
