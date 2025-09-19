import { Component, inject } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { PortfolioContentService } from '../../../services/portfolio-content-service/portfolio-content.service';

@Component({
  selector: 'app-navbar-container',
  imports: [Navbar],
  templateUrl: './navbar.container.html',
  styleUrl: './navbar.container.css'
})
export class NavbarContainer {

  portfolioContent = inject(PortfolioContentService);

  onDarkModeChanged(isDark: boolean) {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }  
}
