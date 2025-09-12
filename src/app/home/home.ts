import { Component } from '@angular/core';
import { ProjectsContainer } from "./containers/projects.container/projects.container";
import { AboutContainer } from "./containers/about.container/about.container";

@Component({
  selector: 'app-home',
  imports: [ProjectsContainer, AboutContainer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
