import { Component, input } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css'
})
export class AboutMe {
  firstName = input<string>('');
  profession = input<string>('');
  aboutMe = input<string>('')
  resumeLink = input<string>('');
  profileUrl = input<string>('');
}
