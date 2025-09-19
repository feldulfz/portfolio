import { Component, inject } from '@angular/core';
import { Projects } from "../../components/projects/projects";
import { PortfolioContentService } from '../../../services/portfolio-content-service/portfolio-content.service';

@Component({
  selector: 'app-projects-container',
  imports: [Projects],
  templateUrl: './projects.container.html',
  styleUrl: './projects.container.css'
})
export class ProjectsContainer {
  portfolioContent = inject(PortfolioContentService);
}

