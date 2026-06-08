import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObserverDemo } from './observer-demo/observer-demo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ObserverDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Observe');
}
