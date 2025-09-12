import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarContainer } from "./home/containers/navbar.container/navbar.container";
import { FooterContainer } from './home/containers/footer.container/footer.container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterContainer, NavbarContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-web');
}
