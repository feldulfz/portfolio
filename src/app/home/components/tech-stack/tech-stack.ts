import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  imports: [],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.css'
})
export class TechStack {
  logoUrl = input<String>('');
  logoTitle = input<String>('');
  logoAltAttribute = input<String>('');
}
