import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Container, } from "./container/container";


@Component({
  selector: 'app-root',
  imports: [Header, Container],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Angular-ekart';
}
