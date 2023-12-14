import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyReplace'
})
export class CurrencyReplacePipe implements PipeTransform {
  transform(value: any): string {
    // Format the currency value without the symbol
    const formattedValue = parseInt(value).toLocaleString('en-US', {
      style: 'currency',
      currency: 'UZS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });

    // Remove the "UZS" symbol from the formatted value
    const withoutSymbol = formattedValue.replace('UZS', '').trim();

    // Replace commas with spaces
    const replacedValue = withoutSymbol.replace(/,/g, ' ');

    return replacedValue;
  }
}
