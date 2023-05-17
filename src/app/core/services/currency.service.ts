import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { currencies } from '../mock/currencies';
import { Currency } from '../models/currency.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() { }

  getCurrencies(): Observable<Currency[]> {
    return of(currencies)
  }
}
