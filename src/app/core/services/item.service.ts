import { Injectable } from '@angular/core';
import { items } from '../mock/items';
import { Observable, of } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Observable<Item[]> {
    return of(items)
  }
}
