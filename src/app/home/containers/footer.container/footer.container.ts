import { Component, inject} from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { CommonModule } from '@angular/common';
import { PortfolioContentService } from '../../../services/portfolio-content-service/portfolio-content.service';

@Component({
  selector: 'app-footer-container',
  imports: [Footer, CommonModule],
  templateUrl: './footer.container.html',
  styleUrl: './footer.container.css'
})
export class FooterContainer {
  portfolioContent = inject(PortfolioContentService);
}
