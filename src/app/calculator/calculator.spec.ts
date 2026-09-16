import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Calculator } from './calculator';

describe('Calculator', () => {
  let component: Calculator;
  let fixture: ComponentFixture<Calculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculator],
    }).compileComponents();

    fixture = TestBed.createComponent(Calculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the calculator component', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly add two numbers (15 + 25 = 40)', () => {
    component.add('15', '25');
    expect(component.result).toBe(40);
    expect(component.resultDisplay).toBe('40');
  });

  it('should correctly subtract two numbers (50 - 18 = 32)', () => {
    component.subtract('50', '18');
    expect(component.result).toBe(32);
    expect(component.resultDisplay).toBe('32');
  });

  it('should correctly multiply two numbers (6 * 7 = 42)', () => {
    component.multiply('6', '7');
    expect(component.result).toBe(42);
    expect(component.resultDisplay).toBe('42');
  });

  it('should correctly divide two numbers (100 / 4 = 25)', () => {
    component.divide('100', '4');
    expect(component.result).toBe(25);
    expect(component.resultDisplay).toBe('25');
  });

  it('should handle division by zero gracefully', () => {
    component.divide('10', '0');
    expect(component.result).toBeNull();
    expect(component.resultDisplay).toBe('Erreur: division par 0');
  });

  it('should handle decimal numbers (12.5 + 7.5 = 20)', () => {
    component.add('12.5', '7.5');
    expect(component.result).toBe(20);
    expect(component.resultDisplay).toBe('20');
  });

  it('should handle invalid inputs', () => {
    component.add('abc', '10');
    expect(component.result).toBeNull();
    expect(component.resultDisplay).toBe('Entrée invalide');
  });
});
