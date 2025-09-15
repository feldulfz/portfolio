import { Component, effect, input, output, signal } from '@angular/core';
@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  darkMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')
  );

  firstName = input<string>('');
  lastName = input<string>('');
  
  darkModeChange = output<boolean>();

  constructor() {
    effect(() => {      
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
      this.darkModeChange.emit(this.darkMode());
    });
  }

  toggleDarkMode() {
    this.darkMode.set(!this.darkMode());
  }

}
