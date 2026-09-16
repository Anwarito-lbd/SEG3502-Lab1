import { Component } from '@angular/core';
import { TempConverter } from './temp-converter/temp-converter';
import { Calculator } from './calculator/calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  imports: [TempConverter, Calculator]
})
export class App {
  title = 'lab1-temp-converter';
}
