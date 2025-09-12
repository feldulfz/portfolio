import { Component, inject, computed } from '@angular/core';
import { AboutMe } from "../../components/about-me/about-me";
import { Contentful } from '../../../services/contentful';
import { toSignal } from '@angular/core/rxjs-interop';
import { defaultAbout } from '../../../models/about.model';

@Component({
  selector: 'app-about-container',
  imports: [AboutMe],
  templateUrl: './about.container.html',
  styleUrl: './about.container.css'
})
export class AboutContainer {
  private contentfulService = inject(Contentful);
  
  about = toSignal(this.contentfulService.getAbout(), { initialValue: defaultAbout });

}
