import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  readonly currentYear = new Date().getFullYear();
  
  email = input<string>('');
  firstName = input<string>('');
  lastName = input<string>('');
}
