import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  letters: [string[]] = [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    [ 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q'],
    ['r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']];
  letterActive: string;

  pressLetter(letter: string): void {
    this.changeLetter(letter);
  }
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.changeLetter(event.key);
  }
  changeLetter(letter): void {
    if (letter === this.letterActive) {
      this.letterActive = '';
      setTimeout(() => {
        this.letterActive = letter;
      }, 100);
      return;
    }
    // why this here
    this.letterActive = letter;
  }
}
