import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  title = input<string>('');
  description = input<string>('');
  status = input<boolean>(false);
  imageUrl = input<string>('');
  githubLink = input<string>('');
  projectLink = input<string>('');
  projectType = input<string>('');
}
