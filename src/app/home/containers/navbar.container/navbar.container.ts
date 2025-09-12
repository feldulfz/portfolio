import { Component, inject } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Contentful } from '../../../services/contentful';
import { toSignal } from '@angular/core/rxjs-interop';
import { defaultAbout } from '../../../models/about.model';

@Component({
  selector: 'app-navbar-container',
  imports: [Navbar],
  templateUrl: './navbar.container.html',
  styleUrl: './navbar.container.css'
})
export class NavbarContainer {
  private contentfulService = inject(Contentful);

  about = toSignal(this.contentfulService.getAbout(), { initialValue: defaultAbout });
}
