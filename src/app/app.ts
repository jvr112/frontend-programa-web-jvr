import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextareaModule } from 'primeng/textarea';
import { Toolbar } from './components/toolbar/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextareaModule, Toolbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('devWeb');
}
