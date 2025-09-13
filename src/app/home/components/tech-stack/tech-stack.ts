import { Component, input } from '@angular/core';
import { TechStackItem } from './tech-stack-item/tech-stack-item';
import { Logo } from '../../../models/logo.model';

@Component({
  selector: 'app-tech-stack',
  imports: [TechStackItem],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.css'
})
export class TechStack {
  logoTechs = input<Logo[]>([]);
  logoTools = input<Logo[]>([]);
}
