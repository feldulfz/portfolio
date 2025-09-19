import { Component, inject} from '@angular/core';
import { AboutMe } from "../../components/about-me/about-me";
import { PortfolioContentService } from '../../../services/portfolio-content-service/portfolio-content.service';

@Component({
  selector: 'app-about-container',
  imports: [AboutMe],
  templateUrl: './about.container.html',
  styleUrl: './about.container.css'
})
export class AboutContainer {
  portfolioContent = inject(PortfolioContentService);
}
