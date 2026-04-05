import { Component } from '@angular/core';
import { Navbar } from './core/layout/navbar/navbar';
import { Hero } from './features/home/hero/hero';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}