import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TempConverter } from './temp-converter';

describe('TempConverter', () => {
  let component: TempConverter;
  let fixture: ComponentFixture<TempConverter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempConverter],
    }).compileComponents();

    fixture = TestBed.createComponent(TempConverter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert 0 celsius to 32 fahrenheit', () => {
    const tempval = '0';
    component.convertCelsius(tempval);
    expect(component.fahrenheitValue).toBeCloseTo(32);
  });

  it('should convert -100 fahrenheit to -73.33 celsius', () => {
    const tempval = '-100';
    component.convertFahrenheit(tempval);
    expect(component.celsiusValue).toBeCloseTo(-73.33, 2);
  });
});
