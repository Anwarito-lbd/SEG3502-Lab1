import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
  standalone: true
})
export class Calculator {
  firstNumber: number | null = null;
  secondNumber: number | null = null;
  result: number | null = null;
  resultDisplay: string = '';

  add(num1: string, num2: string): void {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      this.resultDisplay = 'Entrée invalide';
      this.result = null;
      return;
    }
    this.firstNumber = n1;
    this.secondNumber = n2;
    this.result = n1 + n2;
    this.resultDisplay = this.formatNumber(this.result);
  }

  subtract(num1: string, num2: string): void {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      this.resultDisplay = 'Entrée invalide';
      this.result = null;
      return;
    }
    this.firstNumber = n1;
    this.secondNumber = n2;
    this.result = n1 - n2;
    this.resultDisplay = this.formatNumber(this.result);
  }

  multiply(num1: string, num2: string): void {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      this.resultDisplay = 'Entrée invalide';
      this.result = null;
      return;
    }
    this.firstNumber = n1;
    this.secondNumber = n2;
    this.result = n1 * n2;
    this.resultDisplay = this.formatNumber(this.result);
  }

  divide(num1: string, num2: string): void {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      this.resultDisplay = 'Entrée invalide';
      this.result = null;
      return;
    }
    if (n2 === 0) {
      this.resultDisplay = 'Erreur: division par 0';
      this.result = null;
      return;
    }
    this.firstNumber = n1;
    this.secondNumber = n2;
    this.result = n1 / n2;
    this.resultDisplay = this.formatNumber(this.result);
  }

  private formatNumber(value: number): string {
    return Number.isInteger(value) ? value.toString() : parseFloat(value.toFixed(4)).toString();
  }
}
