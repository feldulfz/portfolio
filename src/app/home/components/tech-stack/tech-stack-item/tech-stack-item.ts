import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tech-stack-item',
  imports: [],
  templateUrl: './tech-stack-item.html',
  styleUrl: './tech-stack-item.css'
})
export class TechStackItem {
  logoUrl = input<String>('');
  logoTitle = input<String>('');
  logoAltAttribute = input<String>('');
}
