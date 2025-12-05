import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [NgClass],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  readonly currentYear = new Date().getFullYear();
  
  email = input<string>('');
  firstName = input<string>('');
  lastName = input<string>('');
  urlOne = input<string>('');
  urlTwo = input<string>('');
  urlThree = input<string>('');
  urlFour = input<string>('');
  iconOne = input<string>('');
  iconTwo = input<string>('');
  iconThree = input<string>('');
  iconFour = input<string>('');  
}
