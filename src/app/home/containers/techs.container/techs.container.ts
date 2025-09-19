import { Component, inject } from '@angular/core';
import { TechStack } from "../../components/tech-stack/tech-stack";
import { PortfolioContentService } from '../../../services/portfolio-content-service/portfolio-content.service';


@Component({
  selector: 'app-techs-container',
  imports: [TechStack],
  templateUrl: './techs.container.html',
  styleUrl: './techs.container.css' 
})
export class TechsContainer {
  portfolioContent = inject(PortfolioContentService);
}
