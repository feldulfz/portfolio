import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ProjectCard } from "./components/project-card/project-card";

@Component({
  selector: 'app-home',
  imports: [MatTabsModule, ProjectCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
